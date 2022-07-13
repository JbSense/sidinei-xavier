/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer/Footer'

// Pages
import Home from './pages/public/Home/Home'
import Private from './pages/private/Private'
import Teste from './pages/public/Teste/Teste'

// Contexts
import { AdminProvider } from './contexts/admin'

const AppRoutes = () => {
  return (
    <Router>
      <AdminProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />

          {/* Rotas apenas para admin logado */}
          <Route exact path='/teste' element={<Teste />} />
        </Routes>
      </AdminProvider>
      <Footer />
    </Router>
  )
}

export default AppRoutes
