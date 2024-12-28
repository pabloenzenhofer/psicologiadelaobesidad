const Evaluation = () => {
  return (
    <section className="evaluation-section" id="evaluation">
      <div className="evaluation-content">
        <h2>Evaluación Gratuita</h2>
        <p className="evaluation-description">
          Realiza una breve evaluación. Te enviaremos una primera mirada sobre tus hábitos y recomendaciones personalizadas.
        </p>
        <button 
          className="evaluation-button"
          onClick={() => window.open('https://forms.gle/Ld8TxZEPwNsXV7Jx9', '_blank')}
        >
          Comenzar Evaluación
        </button>
      </div>
    </section>
  )
}

export default Evaluation 