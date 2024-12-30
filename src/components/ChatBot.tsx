import { useState } from 'react'
import { IoClose, IoPaperPlaneOutline } from 'react-icons/io5'
import chatbotImage from '../assets/chatbot.png'

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://tu-dominio.com/api/chat'  // URL de producción
  : 'http://localhost:8080/api/chat';   // URL local

// Detectar si estamos en GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');
const BASE_URL = isGitHubPages ? '/psicologiadelaobesidad' : '';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([{
    text: `¡Hola! 😊 ¿En qué puedo ayudarte? Selecciona una opción o escribe tu consulta:

❶ Enfoque de tratamiento
❷ Costo de sesión
❸ Sesiones online
❹ Grupo mindful eating
❺ Cómo empezar

👆 Solo escribe el número o tu pregunta`,
    isUser: false
  }])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    // Manejar respuestas por número con respuestas más cortas y links
    const numberResponse = {
      "1": "Usamos terapias basadas en evidencia: TCC, ACT y DBT 🧠",
      "2": "¿De qué país nos escribes? 💰",
      "3": "Agenda tu sesión aquí: https://calendly.com/psicologiadelaobesidad 🌐",
      "4": "¿Te gustaría unirte al grupo de WhatsApp sobre mindful eating? Escríbenos: https://wa.me/541166808612 🧘‍♀️",
      "5": "Completa tu evaluación: https://forms.gle/Ld8TxZEPwNsXV7Jx9 🚀"
    }[inputText.trim()]

    const userMessage = { text: inputText, isUser: true }
    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    try {
      if (numberResponse) {
        setMessages(prev => [...prev, { text: numberResponse, isUser: false }])
        setIsLoading(false)
        return
      }

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: inputText.trim() })
      })

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      setMessages(prev => [...prev, { text: data.response, isUser: false }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { 
        text: "Lo siento, hubo un error al procesar tu mensaje.", 
        isUser: false 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        <img 
          src={chatbotImage}
          alt="ChatBot" 
          className="chatbot-icon"
        />
      </button>

      <div className="chatbot-window">
        <div className="chatbot-header">
          <div className="chatbot-header-title">
            <img 
              src={chatbotImage}
              alt="ChatBot" 
              className="chatbot-header-icon"
            />
            <h3>Chat con PsicoBot</h3>
          </div>
          <button 
            className="close-button"
            onClick={() => setIsOpen(false)}
          >
            <IoClose size={20} />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`message ${msg.isUser ? 'user' : 'bot'}`}
            >
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="message bot loading">
              <span>.</span><span>.</span><span>.</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="chatbot-input">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe tu mensaje..."
          />
          <button type="submit" disabled={isLoading}>
            <IoPaperPlaneOutline />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatBot 