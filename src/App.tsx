import './App.css?v=1'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Diferencial from './sections/Diferencial'
import Articles from './sections/Articles'
import WhatsAppButton from './components/WhatsAppButton'
import Evaluation from './sections/Evaluation'
import Resources from './sections/Resources'
import Prices from './sections/Prices'
import PaymentMethods from './sections/PaymentMethods'
import { Helmet } from 'react-helmet'
import Analytics from './components/Analytics'

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
      <Helmet>
        <title>Psicología de la Obesidad</title>
        <link rel="icon" type="image/webp" href="./img/logo.webp" />
        <meta name="description" content="Atención psicológica especializada en obesidad. Sesiones online para toda Latinoamérica. Tratamiento profesional y personalizado." />
        <meta name="keywords" content="psicología, obesidad, terapia online, salud mental, pérdida de peso, bienestar emocional" />
        <meta property="og:title" content="Psicología de la Obesidad" />
        <meta property="og:description" content="Atención psicológica especializada en obesidad" />
        <meta property="og:image" content="./logo.png" />
        <link rel="canonical" href="https://pabloenzenhofer.github.io/psicologiadelaobesidad/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Hero />
          <Services />
          <Diferencial />
          <Articles />
          <Evaluation />
          <Resources />
          <Prices />
          <PaymentMethods />
        </main>
        <WhatsAppButton />
      </div>
    </>
  )
}

export default App
