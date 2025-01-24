import { IoLogoWhatsapp } from 'react-icons/io5'
import ReactGA from 'react-ga4'

const WhatsAppButton = () => {
  const phoneNumber = "541166808612";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = () => {
    ReactGA.event({
      category: 'Contact',
      action: 'Click WhatsApp Button',
      label: 'WhatsApp Contact'
    })
  }

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      onClick={handleClick}
    >
      <IoLogoWhatsapp size={35} color="#ffffff" />
    </a>
  );
};

export default WhatsAppButton; 