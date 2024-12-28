import { IoLogoWhatsapp } from 'react-icons/io5'

const WhatsAppButton = () => {
  return (
    <div 
      className="whatsapp-button" 
      onClick={() => window.open('https://wa.me/59894045441', '_blank')}
    >
      <IoLogoWhatsapp size={60} color="#ffffff" />
    </div>
  )
}

export default WhatsAppButton 