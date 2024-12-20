import { useState, useRef, useEffect } from 'react'
import { generateResponse } from '../services/openai'

interface Message {
  content: string
  isUser: boolean
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "¡Hola! Soy tu asistente virtual especializado en psicología de la obesidad. Puedo responder tus preguntas sobre nuestros servicios, metodología y cualquier duda que tengas. ¿En qué puedo ayudarte?",
      isUser: false
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Agregar mensaje del usuario
    const userMessage = { content: inputMessage, isUser: true }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      // Obtener respuesta de GPT
      const response = await generateResponse(inputMessage)
      const botMessage = { content: response, isUser: false }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage = {
        content: "Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.",
        isUser: false
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Asistente Virtual IA</h3>
            <button onClick={() => setIsOpen(false)} className="close-button">×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.isUser ? 'user-message' : 'bot-message'}`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="bot-message loading">
                <span>.</span><span>.</span><span>.</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu pregunta..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? '...' : 'Enviar'}
            </button>
          </form>
        </div>
      )}
      <button 
        className="chatbot-button"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir chat con asistente virtual"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6 0 1.66.67 3.16 1.76 4.24l-1.45 1.45c-.1.1-.15.22-.15.35v.71c0 .28.22.5.5.5h4.7c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10h-3.3l.86-.86c.19-.19.29-.44.29-.71 0-.89-.36-1.69-.95-2.27C8.3 11.47 8 10.77 8 10c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      </button>
    </div>
  )
}

export default ChatBot 