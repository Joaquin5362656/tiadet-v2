import { createContext, useContext, useState } from 'react'
import { USUARIOS_INICIALES } from '../data/datos'

const AuthContext = createContext(null)

const LS_KEY_USUARIOS = 'tiaedit_usuarios'
const LS_KEY_SESSION  = 'tiaedit_usuario'

function cargarUsuarios() {
  try {
    const s = localStorage.getItem(LS_KEY_USUARIOS)
    return s ? JSON.parse(s) : USUARIOS_INICIALES
  } catch {
    return USUARIOS_INICIALES
  }
}

function guardarUsuarios(lista) {
  localStorage.setItem(LS_KEY_USUARIOS, JSON.stringify(lista))
}

export function AuthProvider({ children }) {
  const [usuarios, setUsuarios] = useState(cargarUsuarios)
  const [usuario, setUsuario] = useState(() => {
    try {
      const s = localStorage.getItem(LS_KEY_SESSION)
      return s ? JSON.parse(s) : null
    } catch {
      return null
    }
  })

  function login(dni, password) {
    const u = usuarios.find(u => u.dni === dni.trim() && u.password === password.trim())
    if (u) {
      setUsuario(u)
      localStorage.setItem(LS_KEY_SESSION, JSON.stringify(u))
      return true
    }
    return false
  }

  function loginInvitado() {
    const invitado = { id: 'guest', nombre: 'Visitante', rol: 'invitado', foto: null }
    setUsuario(invitado)
    localStorage.setItem(LS_KEY_SESSION, JSON.stringify(invitado))
  }

  function register({ nombre, dni, email, password }) {
    if (usuarios.find(u => u.dni === dni.trim()))
      return { ok: false, error: 'El DNI ya está registrado.' }
    if (usuarios.find(u => u.email === email.trim()))
      return { ok: false, error: 'El email ya está registrado.' }

    const nuevo = {
      id: Date.now(),
      dni: dni.trim(),
      email: email.trim(),
      password,
      nombre: nombre.trim(),
      rol: 'alumno',
      foto: null,
      legajo: `DOC-${String(usuarios.length + 1).padStart(3, '0')}`,
    }
    const lista = [...usuarios, nuevo]
    setUsuarios(lista)
    guardarUsuarios(lista)
    setUsuario(nuevo)
    localStorage.setItem(LS_KEY_SESSION, JSON.stringify(nuevo))
    return { ok: true }
  }

  function logout() {
    setUsuario(null)
    localStorage.removeItem(LS_KEY_SESSION)
  }

  function actualizarFoto(dataUrl) {
    const actualizado = { ...usuario, foto: dataUrl }
    setUsuario(actualizado)
    localStorage.setItem(LS_KEY_SESSION, JSON.stringify(actualizado))
    const lista = usuarios.map(u => (u.id === usuario.id ? { ...u, foto: dataUrl } : u))
    setUsuarios(lista)
    guardarUsuarios(lista)
  }

  const alumnosFiltrados = usuarios.filter(u => u.rol === 'alumno')

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        loginInvitado,
        register,
        logout,
        actualizarFoto,
        usuarios: alumnosFiltrados,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
