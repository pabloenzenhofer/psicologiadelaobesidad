import { Link } from 'react-router-dom'

export default function Evaluation() {
  return (
    <section className="evaluation-section" id="evaluacion">
      <div className="evaluation-content">
        <h2>Evaluación Inicial</h2>
        <p className="evaluation-description">
          Realiza una evaluación completa de tu situación actual. 
          Te brindaremos una devolución personalizada para ayudarte 
          a entender mejor tu relación con la alimentación y definir 
          el mejor camino para alcanzar tus objetivos.
        </p>
        <a 
          href="https://forms.gle/156i6oqm6kMotTXVA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="evaluation-button"
        >
          Comenzá tu evaluación gratis
        </a>
      </div>
    </section>
  )
} 