import './App.css?v=1'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Diferencial from './sections/Diferencial'
import Articles from './sections/Articles'
import PaymentMethods from './sections/PaymentMethods'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Services />
        <Diferencial />
        <Articles />
        <PaymentMethods />
      </main>
      <WhatsAppButton />
    </div>
  )
}

export default App
