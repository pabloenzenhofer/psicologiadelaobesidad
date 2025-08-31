// src/App.tsx - VERSIÓN MÍNIMA PARA DEBUGGING
import React from 'react'

function App() {
  return (
    <div style={{ 
      padding: '20px', 
      color: 'white', 
      background: '#1A1B26', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🚀 Test - Psicología de la Obesidad</h1>
      <p>✅ Si puedes ver esto, React está funcionando correctamente.</p>
      <p>📅 Fecha: {new Date().toLocaleDateString()}</p>
      <p>⏰ Hora: {new Date().toLocaleTimeString()}</p>
      <p>🔧 Build: {process.env.NODE_ENV}</p>
    </div>
  )
}

export default App