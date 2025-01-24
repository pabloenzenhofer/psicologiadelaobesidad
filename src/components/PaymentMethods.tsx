import LazyImage from './LazyImage'
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
            <LazyImage
              src={mercado}
              alt="Pago seguro a través de MercadoPago"
              width={200}
              height={50}
              className="payment-logo"
            />
            <span>MercadoPago</span>
          </div>
          <div className="payment-icon">
            <LazyImage
              src={paypal}
              alt="Pago seguro con PayPal"
              width={150}
              height={40}
              className="payment-logo"
            />
            <span>PayPal</span>
          </div>
          <div className="payment-icon">
            <LazyImage
              src={global}
              alt="Transferencia segura con Global66"
              width={150}
              height={40}
              className="payment-logo"
            />
            <span>Global66</span>
          </div>
          <div className="payment-icon prex">
            <LazyImage
              src={prex}
              alt="Pago seguro con Prex"
              width={150}
              height={40}
              className="payment-logo"
            />
            <span>Prex</span>
          </div>
          <div className="payment-icon">
            <LazyImage
              src={binance}
              alt="Pago con criptomonedas en Binance"
              width={150}
              height={40}
              className="payment-logo"
            />
            <span>Binance</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethods 