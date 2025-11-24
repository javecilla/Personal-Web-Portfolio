interface Window {
  grecaptcha: {
    ready: (callback: () => void) => void
    render: (element: string | HTMLElement, options: any) => number
    getResponse: (widget: number) => string
    reset: (widget: number) => void
  }
}
