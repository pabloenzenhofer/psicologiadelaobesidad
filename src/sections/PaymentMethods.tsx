import mercado from '../assets/mercado.png'
import paypal from '../assets/paypal.png'
import global from '../assets/global.png'
import prex from '../assets/prex.png'
import binance from '../assets/binance.png'

const PaymentMethods = () => {
  const payments = [
    { name: "Mercado Pago", icon: mercado, className: "mercado" },
    { name: "PayPal", icon: paypal, className: "paypal" },
    { name: "Global 66", icon: global, className: "global66" },
    { name: "Prex", icon: prex, className: "prex" },
    { name: "Binance", icon: binance, className: "binance" }
  ]

  return (
    <section className="payment-methods">
      <div className="payment-container">
        <h4>Medios de Pago</h4>
        <div className="payment-icons">
          {payments.map((payment, index) => (
            <div key={index} className={`payment-icon ${payment.className}`}>
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