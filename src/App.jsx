import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthProvider, useAuth } from './components/AuthContext'
import Login from './pages/Login'
import Home from './pages/Home'
import { ModulosList, ModuloDetalle } from './pages/Modulos'
import Foros from './pages/Foros'
import Actividades from './pages/Actividades'
import TFI from './pages/TFI'
import AreaPersonal from './pages/AreaPersonal'
import Bitacora from './pages/Bitacora'
import Participantes from './pages/Participantes'

function PrivateRoute({ children }) {
  const { usuario } = useAuth()
  return usuario ? children : <Navigate to="/login" replace />
}

function PublicRoute({ children }) {
  const { usuario } = useAuth()
  return !usuario ? children : <Navigate to="/inicio" replace />
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/inicio" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/modulos" element={<PrivateRoute><ModulosList /></PrivateRoute>} />
      <Route path="/modulos/:id" element={<PrivateRoute><ModuloDetalle /></PrivateRoute>} />
      <Route path="/actividades" element={<PrivateRoute><Actividades /></PrivateRoute>} />
      <Route path="/foros" element={<PrivateRoute><Foros /></PrivateRoute>} />
      <Route path="/tfi" element={<PrivateRoute><TFI /></PrivateRoute>} />
      <Route path="/area-personal" element={<PrivateRoute><AreaPersonal /></PrivateRoute>} />
      <Route path="/participantes" element={<PrivateRoute><Participantes /></PrivateRoute>} />
      <Route path="/bitacora" element={<PrivateRoute><Bitacora /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/inicio" replace />} />
    </Routes>
    </>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}
