import mercado from '../assets/mercado.png'
import paypal from '../assets/paypal.png'
import global from '../assets/global.png'
import prex from '../assets/prex.png'
import binance from '../assets/binance.png'
import ReactGA from 'react-ga4'

const PaymentMethods = () => {
  const payments = [
    { name: "Mercado Pago", icon: mercado, className: "mercado" },
    { name: "PayPal", icon: paypal, className: "paypal" },
    { name: "Global 66", icon: global, className: "global66" },
    { name: "Prex", icon: prex, className: "prex" },
    { name: "Binance", icon: binance, className: "binance" }
  ]

  const handlePaymentClick = (method: string) => {
    ReactGA.event({
      category: 'Payment',
      action: 'Click Payment Method',
      label: method
    })
  }

  return (
    <section className="payment-methods" id="payment-methods">
      <div className="payment-container">
        <h4>Medios de Pago</h4>
        <div className="payment-icons">
          {payments.map((payment, index) => (
            <div 
              key={index} 
              className={`payment-icon ${payment.className}`}
              onClick={() => handlePaymentClick(payment.name)}
            >
              <img src={payment.icon} alt={payment.name} />
              <span>{payment.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentMethods 