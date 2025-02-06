import './App.css?v=1'
import { lazy, Suspense } from 'react'

// Imports críticos (carga inmediata)
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import WhatsAppButton from './components/WhatsAppButton'
import Analytics from './components/Analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'  // Vercel Analytics
import { Helmet } from 'react-helmet'

// Imports lazy (carga diferida)
const Services = lazy(() => import('./sections/Services'))
const Diferencial = lazy(() => import('./sections/Diferencial'))
const Articles = lazy(() => import('./sections/Articles'))
const Evaluation = lazy(() => import('./sections/Evaluation'))
const Resources = lazy(() => import('./sections/Resources'))
const Prices = lazy(() => import('./sections/Prices'))
const PaymentMethods = lazy(() => import('./sections/PaymentMethods'))

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Psicología de la Obesidad",
  "description": "Atención psicológica especializada en obesidad",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Argentina"
  },
  "priceRange": "$$",
  "service": "Terapia Psicológica Online"
};

function App() {
  return (
    <>
      <Analytics />
      <VercelAnalytics /> {/* Vercel Analytics */}
      <Helmet>
        <title>Psicología de la Obesidad</title>
        <link rel="icon" type="image/webp" href="./img/logo.webp" />
        <meta name="description" content="Atención psicológica especializada en obesidad" />
        <meta name="keywords" content="psicologia, obesidad, terapia online, salud mental" />
        <meta property="og:title" content="Psicología de la Obesidad" />
        <meta property="og:description" content="Atención psicológica especializada en obesidad" />
      </Helmet>
      <Navbar />
      <Hero />
      <WhatsAppButton />
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
        <Diferencial />
        <Articles />
        <Evaluation />
        <Resources />
        <Prices />
        <PaymentMethods />
      </Suspense>
    </>
  )
}

export default App