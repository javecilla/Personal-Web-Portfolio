<script setup lang="ts">
import { socials } from "@/data/socials";  
</script>

<template>
  <section class="contact-section section-bg">
    <div class="contact-section__header">
      <h2 class="section-title">Let's Connect</h2>
      <p class="section-text">
        Have a project in mind or want to collaborate? I'd love to hear from you!
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
              <component 
                :is="link.icon" 
                class="social-link__icon"
                :size="22" 
              />
              <span class="social-link__label">
                {{ link.label }}
              </span>
            </a>
          </div>
        </div>
        <div class="contact-box">
          <form class="contact-form">
            <!-- Add a wrapper div for the two-column layout -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div class="form-group">
                <label for="name" class="form-label">Name <span class="text-red-500">*</span></label>
                <input
                  id="name"
                  type="text"
                  required
                  class="form-input"
                  placeholder="Hello..."
                />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email <span class="text-red-500">*</span></label>
                <input
                  id="email"
                  type="email"
                  required
                  class="form-input"
                  placeholder="Where i can reply?"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject <span class="text-red-500">*</span></label>
              <input
                id="subject"
                type="text"
                required
                class="form-input"
                placeholder="What's the subjects?"
              />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message <span class="text-red-500">*</span></label>
              <textarea
                id="message"
                required
                class="form-textarea"
                placeholder="Tell me about your project..."
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              class="submit-button"
            >
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  @apply space-y-10 sm:space-y-16 p-6 lg:p-8 rounded-2xl; /* Increased space-y values */
}

.contact-section__header {
  @apply space-y-2 sm:space-y-3 text-center;
  /* Removed mb-10 sm:mb-8 since we're using space-y on the parent */
}

.contact-container {
  @apply max-w-[65rem] mx-auto lg:ml-10;
}

.contact-content {
  @apply grid grid-cols-1 md:grid-cols-[170px_1fr] gap-8 md:gap-10;
}

.contact-social {
  @apply flex flex-col items-center md:items-start gap-4 pt-2
         w-full; /* Added full width */
}

.contact-social__links {
  @apply flex flex-row md:flex-col gap-3 
         w-full justify-center md:justify-start; /* Changed from w-[20px] to w-full */
}

.social-link {
  @apply flex items-center /* Changed from items-start */
         justify-center md:justify-start /* Updated justification */
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
         transition-all duration-300
         text-gray-500 dark:text-white/70;
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

/* Update the shadow styles to only show on medium screens and up */
.contact-box::before {
  content: '';
  @apply absolute 
         hidden md:block /* Hide on mobile, show on md breakpoint and up */
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
         focus:outline-none
         pointer-events-none;
}

/* Hover and focus states */
.form-input:hover,
.form-textarea:hover {
  @apply border-gray-300 dark:border-zinc-800;
}

.contact-box:hover .form-input:focus,
.contact-box:hover .form-textarea:focus {
  @apply shadow-sm;
}
</style>