import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/libs/firebase'
import emailjs from 'emailjs-com'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export const contactService = {
  async sendMessage(data: ContactForm, recaptchaToken?: string) {
    try {
      // Store in Firebase
      const docRef = await addDoc(collection(db, 'contacts'), {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })

      // Send email using EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: import.meta.env.VITE_MAIL_FROM_NAME,
        reply_to: data.email,
      }

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY

      console.log('EmailJS Config:', {
        serviceId,
        templateId,
        publicKey,
        templateParams,
      })

      const emailResponse = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log('Email sent successfully:', emailResponse)
      return { success: true, id: docRef.id }
    } catch (error) {
      console.error('Error sending message:', error)
      throw error
    }
  },
}
