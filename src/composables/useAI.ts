import type { GeminiResponse } from '@/types/ai'

export function useAI() {
  const useGemini = async (
    prompt: string,
    faqContext: string
  ): Promise<string> => {
    const apiUrl = `${import.meta.env.VITE_GEMINI_API_URL}?key=${
      import.meta.env.VITE_GEMINI_API_KEY
    }`

    // console.log('DEBUG - API URL:', apiUrl)
    // console.log(
    //   'DEBUG - VITE_GEMINI_API_URL:',
    //   import.meta.env.VITE_GEMINI_API_URL
    // )
    // console.log(
    //   'DEBUG - VITE_GEMINI_API_KEY:',
    //   import.meta.env.VITE_GEMINI_API_KEY
    // )

    if (!apiUrl || !import.meta.env.VITE_GEMINI_API_KEY) {
      throw new Error('Gemini API URL or key is missing')
    }

    try {
      console.log('DEBUG - Sending request to:', apiUrl)
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { parts: [{ text: `${faqContext}\n\nUser Question: ${prompt}` }] }
          ]
        })
      })

      console.log('DEBUG - Response status:', response.status)
      console.log('DEBUG - Response ok:', response.ok)

      if (!response.ok) {
        const errorText = await response.text()
        console.log('DEBUG - Error response:', errorText)
        throw new Error(`Gemini API failed with status: ${response.status}`)
      }

      const data = (await response.json()) as GeminiResponse
      let responseText =
        data.candidates[0]?.content.parts[0].text ?? 'No response'
      responseText = responseText
        .replace(/^((Hey|Hello)( there)?!?\s*)/i, '')
        .replace(/ID:\s*\d+\s*A:\s*/i, '')
        .replace(/\s+/g, ' ')
        .trim()
      return responseText
    } catch (error) {
      console.error('Gemini AI error:', error)
      throw error
    }
  }

  return {
    useGemini
  }
}
