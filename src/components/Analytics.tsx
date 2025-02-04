import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export default function Analytics() {
  useEffect(() => {
    // Crear el script de GA4
    const script1 = document.createElement('script')
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q8K08RBF0M'
    script1.async = true

    // Crear el script de configuración
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q8K08RBF0M');
    `

    // Agregar los scripts al documento
    document.head.appendChild(script1)
    document.head.appendChild(script2)

    // Cleanup al desmontar
    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  return null
}
