<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { socials } from '@/data/socials'
import ImageSkeleton from '@/components/ImageSkeleton.vue'
import { contactService } from '@/services/contactService'

defineProps<{
  id?: string
}>()

// Track loading state for each icon
const loadedIcons = ref(new Set<string>())
const handleIconLoad = (skillName: string) => {
  loadedIcons.value.add(skillName)
}

const isIconLoaded = (skillName: string): boolean => {
  return loadedIcons.value.has(skillName)
}

const clearError = (field: string) => {
  if (errors.value[field]) {
    errors.value = {
      ...errors.value,
      [field]: ''
    }
  }
}

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleInput = (field: keyof typeof form.value) => {
  clearError(field)
  if (errors.value.submit) {
    errors.value.submit = ''
  }
  if (successMessage.value) {
    successMessage.value = ''
  }
}

const isSubmitting = ref(false)
const errors = ref<Record<string, string>>({})

const validateForm = () => {
  const newErrors: Record<string, string> = {}

  if (!form.value.name.trim()) {
    newErrors.name = 'Name is required'
  }

  if (!form.value.email.trim()) {
    newErrors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    newErrors.email = 'Invalid email format'
  }

  if (!form.value.subject.trim()) {
    newErrors.subject = 'Subject is required'
  }

  if (!form.value.message.trim()) {
    newErrors.message = 'Message is required'
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

let recaptchaWidget: number

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
  script.async = true
  script.defer = true
  document.head.appendChild(script)

  script.onload = () => {
    window.grecaptcha.ready(() => {
      recaptchaWidget = window.grecaptcha.render('recaptcha', {
        sitekey: import.meta.env.VITE_GOOGLE_RECAPTCHA_FRONTEND_KEY,
        theme: 'light',
        callback: () => {
          // Clear recaptcha error when user completes the challenge
          if (errors.value.recaptcha) {
            errors.value.recaptcha = ''
          }
        }
      })
    })
  }
})

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  if (!validateForm()) {
    return
  }

  try {
    isSubmitting.value = true
    const recaptchaToken = await window.grecaptcha.getResponse(recaptchaWidget)

    if (!recaptchaToken) {
      errors.value.recaptcha = 'Please complete the reCAPTCHA'
      return
    }

    console.log(form.value)
    await contactService.sendMessage(form.value, recaptchaToken)

    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    window.grecaptcha.reset(recaptchaWidget)

    errors.value = {}
    successMessage.value =
      'Message sent successfully! I will get back to you soon.'
  } catch (error) {
    errors.value.submit = 'Failed to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

const successMessage = ref('')
</script>

<template>
  <section :id="id" class="contact-section section-bg">
    <div class="contact-section__header">
      <h4 class="section-title">Let's Connect</h4>
      <p class="section-text">
        Have a project in mind or want to collaborate? I'd love to hear from
        you!
      </p>
    </div>

    <div class="contact-container">
      <div class="contact-content">
        <div class="contact-social">
          <div class="contact-social__links">
            <a
              v-for="link in socials"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              :title="link.label"
              class="social-link group"
            >
              <Transition
                enter-active-class="transition-opacity duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-300"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ImageSkeleton
                  v-show="!isIconLoaded(link.label)"
                  rounded="rounded-md"
                  className="skills__icon-skeleton"
                />
              </Transition>
              <img
                :src="link.icon"
                :alt="link.label"
                :title="link.label"
                class="social-link__icon"
                :class="{
                  'social-link__icon--loaded': isIconLoaded(link.label)
                }"
                @load="handleIconLoad(link.label)"
              />
              <span class="social-link__label">
                {{ link.label }}
              </span>
            </a>
          </div>
        </div>
        <div class="contact-box">
          <form class="contact-form" @submit="handleSubmit">
            <!-- Show success message if exists -->
            <div v-if="successMessage" class="success-message">
              {{ successMessage }}
            </div>

            <!-- Show form error if exists -->
            <div v-if="errors.submit" class="error-message mb-4">
              {{ errors.submit }}
            </div>

            <!-- Add a wrapper div for the two-column layout -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div class="form-group">
                <label for="name" class="form-label"
                  >Name <span class="text-red-500">*</span></label
                >
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  :class="{ error: errors.name }"
                  class="form-input"
                  autocomplete="off"
                  placeholder="Hello..."
                  @input="handleInput('name')"
                />
                <span v-if="errors.name" class="error-message">{{
                  errors.name
                }}</span>
              </div>

              <div class="form-group">
                <label for="email" class="form-label"
                  >Email <span class="text-red-500">*</span></label
                >
                <input
                  id="email"
                  v-model="form.email"
                  type="text"
                  :class="{ error: errors.email }"
                  class="form-input"
                  autocomplete="off"
                  placeholder="Where i can reply?"
                  @input="handleInput('email')"
                />
                <span v-if="errors.email" class="error-message">{{
                  errors.email
                }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label"
                >Subject <span class="text-red-500">*</span></label
              >
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                :class="{ error: errors.subject }"
                class="form-input"
                autocomplete="off"
                placeholder="What's the subjects?"
                @input="handleInput('subject')"
              />
              <span v-if="errors.subject" class="error-message">{{
                errors.subject
              }}</span>
            </div>

            <div class="form-group">
              <label for="message" class="form-label"
                >Message <span class="text-red-500">*</span></label
              >
              <textarea
                id="message"
                v-model="form.message"
                :class="{ error: errors.message }"
                class="form-textarea"
                autocomplete="off"
                placeholder="Tell me about your project..."
                rows="4"
                @input="handleInput('message')"
              ></textarea>
              <span v-if="errors.message" class="error-message">{{
                errors.message
              }}</span>
            </div>

            <!-- Replace the reCAPTCHA section with this updated version -->
            <div class="form-group col-span-full">
              <div class="recaptcha-container">
                <div id="recaptcha"></div>
                <span v-if="errors.recaptcha" class="recaptcha-error">
                  {{ errors.recaptcha }}
                </span>
              </div>
            </div>

            <button
              type="submit"
              class="submit-button"
              :disabled="isSubmitting"
            >
              <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.social-link__icon--loaded {
  @apply opacity-100 z-20;
}
.contact-section {
  @apply space-y-10 sm:space-y-16 p-6 lg:p-8 rounded-2xl;
}

.contact-section__header {
  @apply space-y-2 sm:space-y-3 text-center;
}

.contact-container {
  @apply max-w-[65rem] mx-auto lg:ml-10;
}

.contact-content {
  @apply grid grid-cols-1 md:grid-cols-[170px_1fr] gap-8 md:gap-10;
}

.contact-social {
  @apply flex flex-col items-center md:items-start gap-4 pt-2 w-full;
}

.contact-social__links {
  @apply flex flex-row md:flex-col gap-3 
         w-full justify-center md:justify-start;
}

.social-link {
  @apply flex items-center justify-center md:justify-start
         px-3 py-3 md:px-4 md:py-3
         dark:bg-zinc-900/20 bg-white/80
         backdrop-blur-sm
         border border-gray-100/50 dark:border-zinc-900/10
         rounded-full md:rounded-md
         hover:scale-105 transition-all duration-300 ease-in-out
         w-12 md:w-full; /* Fixed width for mobile, full width for desktop */
}

.social-link__icon {
  @apply flex-shrink-0 /* Prevent icon from shrinking */
         text-gray-500 dark:text-white/70
         w-[23px] h-[23px] transition-all duration-300 grayscale group-hover:grayscale-0;
}

.social-link__label {
  @apply hidden md:block /* Hide on mobile, show on md and up */
         text-sm font-medium 
         text-gray-600 dark:text-white/80
         transition-all duration-300 
         ml-3;
}

.contact-box {
  @apply bg-white/80 dark:bg-zinc-900/10
         backdrop-blur-sm
         border border-gray-100/50 dark:border-zinc-900/5
         rounded-xl
         p-6 sm:p-8
         relative;
}

/* shadow styles to only show on medium screens and up */
.contact-box::before {
  content: '';
  @apply absolute hidden md:block
         -right-[35px] -top-[30px]
         w-full h-full
         rounded-xl
         border border-gray-100/50 dark:border-zinc-900/10
         bg-white/80 dark:bg-zinc-900/10
         -z-10;
}

.contact-form {
  @apply space-y-6;
}

.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-sm font-semibold text-start
         text-gray-700 dark:text-gray-300;
}

.form-input,
.form-textarea {
  @apply w-full px-4 py-3
         bg-white dark:bg-zinc-800/20
         border border-gray-200 dark:border-zinc-800/10
         rounded-lg
         text-gray-900 dark:text-white
         placeholder-gray-400 dark:placeholder-gray-500
         transition-all ease-in-out duration-500
         focus:ring-2 focus:ring-blue-500/20
         focus:border-blue-500/50 dark:focus:border-blue-400/50
         focus:outline-none;
}

.form-textarea {
  @apply resize-none;
}

.submit-button {
  @apply w-full flex items-center justify-center gap-2
         px-6 py-3
         bg-gradient-to-r from-blue-500 to-purple-500 
         hover:opacity-90 transition-all duration-300
         text-white
         rounded-lg
         font-medium
         transition-all duration-200
         disabled:opacity-50 disabled:cursor-not-allowed
         focus:ring-2 focus:ring-blue-500/20
         focus:outline-none;
}

.form-input:hover,
.form-textarea:hover {
  @apply border-gray-300 dark:border-zinc-800;
}

.contact-box:hover .form-input:focus,
.contact-box:hover .form-textarea:focus {
  @apply shadow-sm;
}

.error {
  @apply border-red-500 focus:border-red-500 focus:ring-red-500/20;
}

.error-message {
  @apply text-red-500 text-sm text-left mt-1 block;
}

.recaptcha-container {
  @apply flex flex-col items-center space-y-2;
}

.recaptcha-error {
  @apply text-red-500 text-sm mt-1 block w-full text-center;
}

.success-message {
  @apply text-green-600 dark:text-green-400 
         text-sm text-left mt-1 mb-4 
         p-3 bg-green-50 dark:bg-green-900/10 
         border border-green-100 dark:border-green-900/10 
         rounded-lg;
}
</style>
