import { Link } from 'react-router-dom'

const Evaluation = () => {
  return (
    <section className="evaluation-section">
      <div className="evaluation-content">
        <h2>Evaluación Inicial</h2>
        <p className="evaluation-description">
          Comienza tu proceso con una evaluación personalizada. Entenderemos juntos tus necesidades y objetivos para crear un plan adaptado a ti.
        </p>
        <a 
          href="https://wa.me/541166808612"
          className="evaluation-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar Evaluación
        </a>
      </div>
    </section>
  )
}

export default Evaluation 