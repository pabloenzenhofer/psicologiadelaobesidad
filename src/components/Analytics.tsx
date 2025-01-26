import { useEffect } from 'react'
import ReactGA from 'react-ga4'

const TRACKING_ID = "G-BHRW70D73W" // ID de medición de Google Analytics

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID)
    ReactGA.send("pageview")
  }, [])

  return null
}

export default Analytics

export function GoogleAnalyticsScript() {
  return (
    <>
      {/* Google Analytics 4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BHRW70D73W"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BHRW70D73W');
        `}
      </script>
    </>
  )
} 