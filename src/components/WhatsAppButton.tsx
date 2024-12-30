import { IoLogoWhatsapp } from 'react-icons/io5'

const WhatsAppButton = () => {
  const phoneNumber = "541166808612";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
    >
      <IoLogoWhatsapp size={35} color="#ffffff" />
    </a>
  );
};

export default WhatsAppButton; 