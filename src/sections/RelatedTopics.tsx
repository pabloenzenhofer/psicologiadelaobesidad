const RelatedTopics = () => {
  const topics = [
    {
      title: "Perder peso de forma saludable",
      snippet: "Un enfoque integral para la pérdida de peso sostenible con apoyo psicológico."
    },
    {
      title: "Pérdida de peso sin dietas restrictivas",
      snippet: "Alternativas saludables a las dietas restrictivas y cómo mantener resultados a largo plazo."
    },
    {
      title: "Cambios de hábitos y pérdida de peso",
      snippet: "Cómo los pequeños cambios en tus hábitos diarios pueden llevar a grandes resultados."
    },
    {
      title: "Ejercicio y bienestar emocional",
      snippet: "La conexión entre actividad física y salud mental en el proceso de pérdida de peso."
    }
  ];

  return (
    <section className="related-topics">
      <div className="related-topics-container">
        <h4>Temas Relacionados</h4>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={index} className="topic-item">
              <h5>{topic.title}</h5>
              <p>{topic.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedTopics; 