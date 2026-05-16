import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad.tsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
