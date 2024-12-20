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

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-button"
        onClick={toggleChat}
        aria-label="Chatbot"
      >
        Chatbot IA
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Asistente Virtual IA</h3>
            <button onClick={toggleChat} className="close-button">×</button>
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
    </div>
  )
}

export default ChatBot 