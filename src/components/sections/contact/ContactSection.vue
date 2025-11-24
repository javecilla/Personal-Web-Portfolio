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
        [field]: '',
      }
    }
  }

  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
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
          },
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
      const recaptchaToken =
        await window.grecaptcha.getResponse(recaptchaWidget)

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
        message: '',
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
                  'social-link__icon--loaded': isIconLoaded(link.label),
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
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
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
    @apply z-20 opacity-100;
  }
  .contact-section {
    @apply space-y-10 rounded-2xl p-6 sm:space-y-16 lg:p-8;
  }

  .contact-section__header {
    @apply space-y-2 text-center sm:space-y-3;
  }

  .contact-container {
    @apply mx-auto max-w-[65rem] lg:ml-10;
  }

  .contact-content {
    @apply grid grid-cols-1 gap-8 md:grid-cols-[170px_1fr] md:gap-10;
  }

  .contact-social {
    @apply flex w-full flex-col items-center gap-4 pt-2 md:items-start;
  }

  .contact-social__links {
    @apply flex w-full flex-row justify-center gap-3 md:flex-col md:justify-start;
  }

  .social-link {
    @apply flex w-12 items-center justify-center rounded-full border border-gray-100/50 bg-white/80 px-3 py-3 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 dark:border-zinc-900/10 dark:bg-zinc-900/20 md:w-full md:justify-start md:rounded-md md:px-4 md:py-3; /* Fixed width for mobile, full width for desktop */
  }

  .social-link__icon {
    @apply /* Prevent icon from shrinking */ h-[23px] w-[23px] flex-shrink-0 text-gray-500 grayscale transition-all duration-300 group-hover:grayscale-0 dark:text-white/70;
  }

  .social-link__label {
    @apply /* Hide on mobile, show on md and up */ ml-3 hidden text-sm font-medium text-gray-600 transition-all duration-300 dark:text-white/80 md:block;
  }

  .contact-box {
    @apply relative rounded-xl border border-gray-100/50 bg-white/80 p-6 backdrop-blur-sm dark:border-zinc-900/5 dark:bg-zinc-900/10 sm:p-8;
  }

  /* shadow styles to only show on medium screens and up */
  .contact-box::before {
    content: '';
    @apply absolute -right-[35px] -top-[30px] -z-10 hidden h-full w-full rounded-xl border border-gray-100/50 bg-white/80 dark:border-zinc-900/10 dark:bg-zinc-900/10 md:block;
  }

  .contact-form {
    @apply space-y-6;
  }

  .form-group {
    @apply space-y-2;
  }

  .form-label {
    @apply block text-start text-sm font-semibold text-gray-700 dark:text-gray-300;
  }

  .form-input,
  .form-textarea {
    @apply w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-500 ease-in-out focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800/10 dark:bg-zinc-800/20 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400/50;
  }

  .form-textarea {
    @apply resize-none;
  }

  .submit-button {
    @apply flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-medium text-white transition-all duration-200 duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50;
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
    @apply mt-1 block text-left text-sm text-red-500;
  }

  .recaptcha-container {
    @apply flex flex-col items-center space-y-2;
  }

  .recaptcha-error {
    @apply mt-1 block w-full text-center text-sm text-red-500;
  }

  .success-message {
    @apply mb-4 mt-1 rounded-lg border border-green-100 bg-green-50 p-3 text-left text-sm text-green-600 dark:border-green-900/10 dark:bg-green-900/10 dark:text-green-400;
  }
</style>
