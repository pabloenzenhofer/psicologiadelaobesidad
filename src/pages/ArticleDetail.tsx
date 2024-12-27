const ArticleDetail = () => {
  return (
    <article className="article-detail">
      <div className="article-detail-container">
        <header className="article-header">
          <span className="article-category">Psicología</span>
          <h1>¿Por qué hay personas que logran perder peso y mantenerlo, mientras otras no?</h1>
          <div className="article-meta">
            <span className="read-time">🕒 10 min de lectura</span>
          </div>
        </header>

        <div className="article-content">
          <p className="article-intro">
            ¿Alguna vez te preguntaste por qué algunas personas pueden regular su peso y otras no? 
            ¿Existen diferencias psicológicas que influyen en este proceso?
            ¡La psicología nos dice que sí! Hay factores clave que marcan la diferencia.
          </p>

          <section>
            <h2>1. Baja tolerancia al hambre</h2>
            <p>
              Las personas que logran mantener un peso saludable también sienten deseos compulsivos de comer, 
              pero no se detienen tanto en estos pensamientos. Por otro lado, quienes tienen dificultades para 
              regular su alimentación tienden a percibir el hambre como una emergencia, sobrevalorando las 
              sensaciones normales del cuerpo y cediendo a la compulsión con más frecuencia de lo que permite 
              una alimentación equilibrada.
            </p>
          </section>

          <section>
            <h2>2. Pensar que no es justo tener que esforzarse</h2>
            <p>
              Cuidar la alimentación y mantener un peso estable requiere esfuerzo, algo que las personas 
              exitosas en este aspecto aceptan sin cuestionar demasiado. Sin embargo, quienes enfrentan 
              dificultades suelen enfocarse en lo injusto que es no poder comer lo que desean, subestimando 
              el esfuerzo que también hacen otras personas.
            </p>
            <p>
              Un dato interesante: muchas personas delgadas aseguran que no hacen esfuerzos, pero si se les 
              pregunta si cambiarían su alimentación en ausencia de consecuencias, admiten que sí lo harían.
            </p>
          </section>

          <section>
            <h2>3. Usar la comida como consuelo</h2>
            <p>
              Cuando las personas con una relación saludable con la comida atraviesan momentos de estrés o 
              tristeza, suelen perder el apetito. En cambio, quienes tienen dificultades para controlar su 
              peso recurren a la comida como consuelo o distracción.
            </p>
            <p>
              Esto puede aliviar momentáneamente emociones negativas como el aburrimiento o la angustia, pero 
              a largo plazo genera más problemas, incluyendo autocrítica, disminución de confianza y percepción 
              de falta de control.
            </p>
          </section>

          <section>
            <h2>4. Confundir el hambre con las ganas de comer</h2>
            <p>
              Una habilidad clave en quienes logran mantener un peso saludable es distinguir entre hambre real 
              y ganas de comer.
            </p>
            <ul>
              <li><strong>Hambre real:</strong> Sensación de vacío en el estómago, retorcijones, ruidos 
              estomacales y cansancio, señalando una necesidad fisiológica.</li>
              <li><strong>Ganas de comer:</strong> Responde a un deseo, no a una necesidad, y suele enfocarse 
              en alimentos específicos.</li>
              <li><strong>Deseo compulsivo:</strong> Un impulso intenso hacia ciertos alimentos, generalmente 
              altos en carbohidratos o grasas, asociado a conflictos emocionales o búsqueda de placer inmediato.</li>
            </ul>
            <p>
              Aprender a identificar estas diferencias es fundamental para construir una relación más saludable 
              con la comida.
            </p>
          </section>

          <section>
            <h2>5. Falta de conciencia sobre lo que se come</h2>
            <p>
              Quienes logran mantener su peso tienen claridad sobre su consumo alimenticio. En cambio, las 
              personas con dificultades suelen autoengañarse, evitando prestar atención a lo que comen para 
              no sentirse mal, lo cual refuerza un ciclo de estrés y angustia.
            </p>
          </section>

          <section>
            <h2>6. Sentirse impotente ante el aumento de peso</h2>
            <p>
              Para algunas personas, ganar peso no representa una catástrofe. Saben que pueden retomar sus 
              hábitos y recuperar el equilibrio. Por el contrario, otras ven el aumento de peso como algo 
              irreversible, lo que las lleva a abandonar sus objetivos.
            </p>
          </section>

          <section className="article-conclusion">
            <h2>Reflexión final: ¿Cómo son tus pensamientos?</h2>
            <p>
              ¿Te identificás más con los pensamientos de quienes logran mantener un peso saludable o con los 
              de aquellos que tienen dificultades?
            </p>
            <p>
              Tal vez veas el hambre como una emergencia, subestimes tu autocontrol, o sientas que no poder 
              comer todo lo que querés es una injusticia. Sin embargo, la buena noticia es que estos patrones 
              de pensamiento pueden cambiar.
            </p>
            <div className="call-to-action">
              <h3>Transformá tu mentalidad</h3>
              <p>
                Adoptar una mentalidad diferente, como la de las personas que logran sus objetivos de peso, 
                es posible. Aprender a pensar de manera más saludable es el primer paso para mejorar tu 
                relación con la comida y alcanzar tus metas.
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}

export default ArticleDetail 