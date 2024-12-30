import { useState } from 'react'
import { IoClose, IoPaperPlaneOutline, IoChatbubbleEllipsesOutline } from 'react-icons/io5'

const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api/chat'  // Ajusta según tu URL de producción
  : 'http://localhost:8080/api/chat';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([{
    text: "¡Hola! Soy PsicoBot, tu asistente en psicología de la obesidad. ¿En qué puedo ayudarte?",
    isUser: false
  }])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const userMessage = { text: inputText, isUser: true }
    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    try {
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
        {isOpen ? <IoClose /> : <IoChatbubbleEllipsesOutline size={30} />}
      </button>

      <div className="chatbot-window">
        <div className="chatbot-header">
          <h3>Chat con PsicoBot</h3>
          <button onClick={() => setIsOpen(false)}>
            <IoClose />
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