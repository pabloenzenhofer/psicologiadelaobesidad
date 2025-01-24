import { useEffect } from 'react'
import ReactGA from 'react-ga4'

const TRACKING_ID = "G-BFYFGGMCF5" // ID de medición de Google Analytics

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID)
    ReactGA.send("pageview")
  }, [])

  return null
}

export default Analytics 