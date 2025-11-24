<script setup lang="ts">
  import { ref, nextTick, onMounted } from 'vue'
  import { useChatStore } from '@/stores/chat'
  import { useChatBot } from '@/utils/chatBot'
  import MarkdownIt from 'markdown-it'
  import { PlusIcon } from 'lucide-vue-next'
  import ConfirmationModal from './ConfirmationModal.vue'

  const userInput = ref('')
  const isLoading = ref(false)
  const typingIndicator = ref(false)
  const isInitializing = ref(true)
  const showConfirmModal = ref(false)
  const textareaRef = ref<HTMLTextAreaElement | null>(null)

  const chatStore = useChatStore()
  const { streamResponse, generateQuickReplies, isOffTopic, resetOffTopic } =
    useChatBot(chatStore)

  const md = new MarkdownIt({ html: true, breaks: true, linkify: true })

  const scrollToBottom = () => {
    const chatContainer = document.querySelector('.overflow-y-auto')
    if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight
  }

  const getStarterQuickReplies = () => [
    'Who are you?',
    'Do you accept project commissions?',
    'What services do you offer?',
  ]

  const focusTextarea = () => {
    nextTick(() => {
      if (textareaRef.value) {
        textareaRef.value.focus()
      }
    })
  }

  onMounted(async () => {
    isInitializing.value = true
    await chatStore.initChat()

    if (chatStore.messages.length === 0) {
      //console.log('Starting new chat with welcome message');
      const botMessageId = await chatStore.addMessage(
        'model',
        '',
        undefined,
        true
      )
      typingIndicator.value = true

      try {
        const streams = streamResponse('', true)
        let fullResponse = ''
        for await (const chunk of streams) {
          fullResponse += chunk + ' '
          await nextTick(() => {
            chatStore.updateMessage(botMessageId, fullResponse.trim())
            scrollToBottom()
          })
        }

        // After streaming completes, update and sync to Firebase with the full response
        await chatStore.updateAndSyncMessage(
          botMessageId,
          fullResponse.trim(),
          getStarterQuickReplies()
        )
        await nextTick(() => scrollToBottom())
      } catch (error) {
        console.error('Starter conversation error:', error)
        chatStore.updateMessage(
          botMessageId,
          'Oops, something went wrong with the starter message!'
        )
        await nextTick(() => scrollToBottom())
      } finally {
        typingIndicator.value = false
      }
    } else {
      //console.log('Restored existing chat:', chatStore.messages);
      // Ensure each model message has its content rendered properly
      chatStore.messages.forEach((msg) => {
        if (msg.role === 'model' && msg.content) {
          chatStore.updateMessage(msg.timestamp, msg.content, msg.options)
        }
      })
      await nextTick(() => scrollToBottom())
    }
    isInitializing.value = false
    focusTextarea()
  })

  async function sendMessage() {
    if (!userInput.value.trim() || isLoading.value) return

    const currentInput = userInput.value
    userInput.value = ''
    isLoading.value = true

    try {
      if (!chatStore.currentChatId) {
        await chatStore.initChat()
      }
      await chatStore.addMessage('user', currentInput)
      await nextTick(() => scrollToBottom())

      try {
        const botMessageId = await chatStore.addMessage('model', '')
        typingIndicator.value = true
        await nextTick(() => scrollToBottom())

        const stream = streamResponse(currentInput)
        let fullResponse = ''

        for await (const chunk of stream) {
          fullResponse += chunk
          typingIndicator.value = false
          chatStore.updateMessage(botMessageId, fullResponse.trim())
          scrollToBottom()
        }

        chatStore.updateMessage(botMessageId, fullResponse.trim())

        // get quick replies
        const chatHistory = chatStore.messages.slice(-5)
        const quickReplies = await generateQuickReplies(
          chatHistory,
          currentInput
        )

        // Then update everything to Firebase
        await chatStore.updateAndSyncMessage(
          botMessageId,
          fullResponse.trim(),
          quickReplies
        )

        // Reset states after everything is done
        isLoading.value = false
        typingIndicator.value = false
      } catch (error) {
        console.error('Streaming error:', error)
        typingIndicator.value = false
        isLoading.value = false
        const lastBotMessage = [...chatStore.messages]
          .reverse()
          .find((m) => m.role === 'model')
        const botMessageId = lastBotMessage?.timestamp || 0
        chatStore.updateMessage(botMessageId, 'Oops, something went wrong!')
        scrollToBottom()
      }
    } catch (error) {
      console.error('Error in sendMessage:', error)
      isLoading.value = false
      userInput.value = currentInput // Restore input on error
    }
  }

  const selectOption = async (option: string) => {
    userInput.value = option.trim().replace(/[.!?]+$/g, '')
    await sendMessage()
    nextTick(() => scrollToBottom())
  }

  const startNewConversation = async () => {
    await chatStore.endSession()
    userInput.value = ''
    resetOffTopic()
    focusTextarea()

    const botMessageId = await chatStore.addMessage(
      'model',
      '',
      undefined,
      true
    )
    typingIndicator.value = true
    await nextTick(() => scrollToBottom())

    try {
      const stream = streamResponse('', true)
      let fullResponse = ''
      for await (const chunk of stream) {
        fullResponse += chunk + ' '
        await nextTick(() => {
          chatStore.updateMessage(botMessageId, fullResponse.trim())
          scrollToBottom()
        })
      }

      await chatStore.updateAndSyncMessage(
        botMessageId,
        fullResponse.trim(),
        getStarterQuickReplies()
      )

      await nextTick(() => scrollToBottom())
    } catch (error) {
      console.error('Starter conversation error:', error)
      chatStore.updateMessage(
        botMessageId,
        'Oops, something went wrong with the starter message!'
      )
      await nextTick(() => scrollToBottom())
    } finally {
      typingIndicator.value = false
    }
  }

  const handleNewConversation = async () => {
    if (chatStore.messages.length > 0) {
      showConfirmModal.value = true
    } else {
      await startNewConversation()
    }
  }

  const confirmNewConversation = async () => {
    showConfirmModal.value = false
    await startNewConversation()
  }
</script>

<template>
  <div class="relative flex h-full flex-col">
    <!-- Confirmation Modal -->
    <ConfirmationModal
      :is-open="showConfirmModal"
      message="Starting a new conversation will clear your current chat history. Are you sure you want to continue?"
      :on-confirm="confirmNewConversation"
      :on-cancel="() => (showConfirmModal = false)"
    />

    <!-- Loading State -->
    <div v-if="isInitializing" class="flex flex-1 items-center justify-center">
      <div class="text-center">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"
        ></div>
        <p class="mt-2 text-gray-600">Initializing chat...</p>
      </div>
    </div>

    <!-- Chat Content -->
    <template v-else>
      <div class="relative flex-1 space-y-3 overflow-y-auto px-4 py-2">
        <div
          v-for="msg in chatStore.messages"
          :key="msg.timestamp"
          class="flex items-start gap-3"
        >
          <div v-if="msg.role !== 'user'" class="flex-shrink-0">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-purple-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 2a8 8 0 0 1 8 8v1h2v3h-2v1a8 8 0 0 1-16 0v-1H2v-3h2v-1a8 8 0 0 1 8-8z"
                />
                <path d="M9 12h.01" />
                <path d="M15 12h.01" />
              </svg>
            </div>
          </div>
          <div class="flex-1">
            <div
              v-if="msg.role !== 'user'"
              class="mb-1 flex items-center text-start text-sm font-medium text-gray-600"
            >
              BOT (Javecilla) -
              <span class="ml-2 text-sm text-gray-600">
                {{
                  new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                }}
              </span>
            </div>
            <div
              v-if="msg.role === 'user'"
              class="mb-1 text-right text-sm text-gray-600"
            >
              {{
                new Date(msg.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              }}
            </div>
            <div
              :class="[
                'max-w-[95%] break-words rounded-2xl px-5 py-2 text-start',
                msg.role === 'user'
                  ? 'ml-auto bg-purple-500 text-white'
                  : msg.isStarter
                    ? 'bg-[#b4a7d6]'
                    : 'bg-gray-100',
              ]"
            >
              <div
                v-if="msg.role === 'model' && !msg.content && typingIndicator"
                class="px-1 py-2 text-gray-800"
              >
                Bot is typing
                <span class="typing-dots">...</span>
              </div>
              <div
                :class="msg.role === 'user' ? 'text-white' : 'text-gray-800'"
                v-html="md.render(msg.content || '')"
              ></div>
            </div>
            <div
              v-if="msg.role === 'model' && msg.options"
              class="mt-3 flex flex-wrap gap-2"
            >
              <button
                v-for="option in msg.options"
                :key="option"
                class="max-w-[350px] whitespace-normal rounded-xl border border-purple-200 bg-transparent px-4 py-2 text-left text-sm text-black transition-colors hover:scale-[1.01] hover:border-purple-600"
                @click="selectOption(option)"
              >
                {{ option }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <form @submit.prevent="sendMessage" class="bg-gray-800 p-2">
        <div class="flex min-h-[15px] flex-grow flex-col">
          <textarea
            ref="textareaRef"
            v-model="userInput"
            class="min-h-[50px] w-full flex-grow resize-none border-none bg-transparent p-2 text-white focus:outline-none focus:ring-0"
            placeholder="Ask anything..."
            rows="2"
            id="user-input"
            :disabled="isLoading || isOffTopic"
          />
        </div>
        <div
          class="-mt-3 flex items-center justify-between gap-4 px-2 pb-1 pt-2"
        >
          <button
            @click="handleNewConversation"
            type="button"
            class="flex items-center justify-center rounded-xl bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600"
            :class="{ 'animate-pulse': isOffTopic }"
            title="Start a new conversation"
          >
            <PlusIcon
              class="forced-icon mr-1 h-5 w-5 text-white"
              stroke-width="1.5"
            />
            New
          </button>
          <button
            type="submit"
            :disabled="isLoading || !userInput.trim() || isOffTopic"
            class="flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-white transition-colors hover:opacity-90 disabled:opacity-50"
          >
            {{ isLoading ? 'Sending...' : 'Send' }}
          </button>
        </div>
      </form>
    </template>
  </div>
</template>

<style scoped>
  .forced-icon {
    width: 20px !important;
    height: 20px !important;
    stroke: white !important;
    display: block !important;
  }
  .typing-dots {
    display: inline-block;
    animation: blink 1.5s infinite;
  }
  @keyframes blink {
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
  :deep(p) {
    margin: 0.5em 0;
  }
  :deep(strong) {
    font-weight: bold;
  }
  :deep(em) {
    font-style: italic;
  }
  :deep(table) {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
  }
  :deep(th, td) {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  :deep(th) {
    background-color: #f2f2f2;
  }
  :deep(ul) {
    list-style-type: disc;
    margin-left: 20px;
    padding-left: 0;
  }
  :deep(li) {
    margin-bottom: 5px;
  }
  :deep(ol) {
    list-style-type: decimal;
    margin-left: 20px;
    padding-left: 0;
  }
  :deep(ol li) {
    margin-bottom: 5px;
  }

  textarea {
    overflow-y: auto;
    max-height: 200px;
  }

  button {
    flex-shrink: 0;
  }

  .overflow-y-auto {
    height: calc(100% - 60px);
  }

  form {
    position: sticky;
    bottom: 0;
    width: 100%;
  }
</style>
