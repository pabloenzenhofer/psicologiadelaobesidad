import React from 'react';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';

const PoliticaPrivacidad = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Psicología de la Obesidad</title>
        <meta name="description" content="Política de Privacidad de Psicología de la Obesidad." />
      </Helmet>
      <Navbar />
      <main className="privacy-container" style={{
        maxWidth: '800px',
        margin: '100px auto 40px auto',
        padding: '2rem',
        background: 'var(--fondo-claro)',
        color: 'var(--text-dark)',
        fontFamily: 'var(--font-body)',
        lineHeight: '1.6',
        borderRadius: 'var(--border-radius-md)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
      }}>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--primary-color)',
          fontSize: '2.5rem',
          marginBottom: '0.5rem'
        }}>Política de Privacidad</h1>
        
        <p style={{
          color: 'var(--celeste-apagada)',
          fontStyle: 'italic',
          marginBottom: '2rem'
        }}>Última actualización: 16 de mayo de 2026</p>

        <p>Esta Política de Privacidad describe cómo se recopila, utiliza y protege la información procesada por la app vinculada a Psicología Obesidad y Diabetes / psiconutriciononline.com.</p>
        <p>La app se utiliza para gestionar consultas iniciadas por personas a través de Instagram, especialmente cuando comentan publicaciones o solicitan información sobre servicios, turnos o procesos administrativos.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Datos que podemos recibir</h2>
        <p>La app puede recibir y procesar algunos datos provenientes de Meta/Instagram, como:</p>
        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>identificador de comentario;</li>
          <li>texto del comentario;</li>
          <li>identificador de la cuenta de Instagram que interactúa;</li>
          <li>identificador de la publicación o contenido relacionado;</li>
          <li>fecha y hora de la interacción;</li>
          <li>mensajes enviados o recibidos dentro del contexto permitido por Meta;</li>
          <li>estado administrativo de la consulta, por ejemplo si fue respondida o está pendiente.</li>
        </ul>
        <p>La app no solicita ni procesa datos clínicos sensibles mediante automatizaciones. Cualquier información relacionada con atención psicológica o de salud debe tratarse únicamente en canales adecuados y con intervención profesional.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Finalidad del uso de los datos</h2>
        <p>Los datos se utilizan únicamente para:</p>
        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>responder consultas iniciadas por la persona;</li>
          <li>enviar información administrativa solicitada;</li>
          <li>gestionar solicitudes de turnos o próximos pasos;</li>
          <li>registrar el estado de una consulta;</li>
          <li>mejorar la organización interna de la atención.</li>
        </ul>
        <p>La app no se utiliza para realizar diagnósticos, tratamientos psicológicos automatizados ni asesoramiento clínico mediante inteligencia artificial.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Uso de automatizaciones</h2>
        <p>La app puede utilizar automatizaciones para responder mensajes o comentarios cuando una persona inicia una interacción, por ejemplo al comentar una palabra clave en una publicación de Instagram.</p>
        <p>Estas respuestas tienen finalidad informativa o administrativa. Si una consulta requiere evaluación profesional, será derivada a una persona responsable.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Almacenamiento de datos</h2>
        <p>Los datos pueden procesarse mediante herramientas internas de automatización, como n8n, y registrarse en sistemas administrativos o planillas internas para seguimiento de consultas.</p>
        <p>Solo las personas autorizadas tienen acceso a esta información.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Compartición de datos</h2>
        <p>No vendemos, alquilamos ni compartimos datos personales con terceros para fines publicitarios.</p>
        <p>Los datos solo pueden compartirse con proveedores técnicos necesarios para operar la automatización, como plataformas de mensajería, automatización, almacenamiento o gestión administrativa, siempre con la finalidad de responder o gestionar la consulta iniciada por la persona.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Conservación de datos</h2>
        <p>Los datos se conservan solo durante el tiempo necesario para gestionar la consulta, cumplir obligaciones administrativas o mantener un historial operativo razonable.</p>
        <p>La persona puede solicitar la eliminación de sus datos escribiendo al email de contacto indicado abajo.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Eliminación de datos</h2>
        <p>Para solicitar la eliminación de datos relacionados con una interacción realizada a través de Instagram, la persona puede enviar un email a:</p>
        <p style={{ fontWeight: 'bold' }}>pabloenzenhofer@gmail.com</p>
        <p>El mensaje debe indicar, si es posible, el usuario de Instagram utilizado para realizar la consulta. Procesaremos la solicitud dentro de un plazo razonable.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Seguridad</h2>
        <p>Aplicamos medidas razonables para proteger la información procesada por la app y limitar el acceso únicamente a personas autorizadas.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Contacto</h2>
        <p>Si tenés preguntas sobre esta Política de Privacidad o querés solicitar acceso, corrección o eliminación de datos, podés escribir a:</p>
        <p style={{ fontWeight: 'bold' }}>pabloenzenhofer@gmail.com</p>

        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #ccc' }}>
          <p><strong>Responsable:</strong> Pablo Alexis Enzenhofer / Psicología Obesidad y Diabetes</p>
          <p><strong>Sitio web:</strong> <a href="https://psiconutriciononline.com" style={{ color: 'var(--primary-color)' }}>https://psiconutriciononline.com</a></p>
        </div>
      </main>
    </>
  );
};

export default PoliticaPrivacidad;
