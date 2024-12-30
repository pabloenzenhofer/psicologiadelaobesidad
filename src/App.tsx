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

function App() {
  return (
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
  )
}

export default App
