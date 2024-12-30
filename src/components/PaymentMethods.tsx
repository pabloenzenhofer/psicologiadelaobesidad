import mercado from '../assets/mercado.png'
import paypal from '../assets/paypal.png'
import global from '../assets/global.png'
import prex from '../assets/prex.png'
import binance from '../assets/binance.png'

const PaymentMethods = () => {
  return (
    <div className="payment-methods">
      <div className="payment-container">
        <h4>Medios de Pago</h4>
        <div className="payment-icons">
          <div className="payment-icon mercado">
            <img src={mercado} alt="MercadoPago" />
            <span>MercadoPago</span>
          </div>
          <div className="payment-icon">
            <img src={paypal} alt="PayPal" />
            <span>PayPal</span>
          </div>
          <div className="payment-icon">
            <img src={global} alt="Global66" />
            <span>Global66</span>
          </div>
          <div className="payment-icon prex">
            <img src={prex} alt="Prex" />
            <span>Prex</span>
          </div>
          <div className="payment-icon">
            <img src={binance} alt="Binance" />
            <span>Binance</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethods 