const Diferencial = () => {
  const diferenciales = [
    {
      title: "Enfoque Personalizado",
      description: "Adaptamos nuestro método a tus necesidades específicas y objetivos personales.",
      icon: "🎯"
    },
    {
      title: "Base Científica",
      description: "Utilizamos métodos respaldados por investigación y evidencia científica.",
      icon: "🧠"
    },
    {
      title: "Acompañamiento Continuo",
      description: "Estamos contigo en cada paso del proceso, brindando apoyo constante.",
      icon: "💪"
    }
  ]

  return (
    <section className="diferencial-section" id="diferencial">
      <h2>Hacemos la Diferencia</h2>
      <div className="diferencial-grid">
        {diferenciales.map((diferencial, index) => (
          <div key={index} className="diferencial-card">
            <div className="diferencial-icon">{diferencial.icon}</div>
            <h3>{diferencial.title}</h3>
            <p>{diferencial.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Diferencial 