import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext'
import './Login.css'

export default function Login() {
  const [modo, setModo] = useState('login')
  const [verPass, setVerPass] = useState(false)
  const [error, setError] = useState('')
  
  const [dni, setDni] = useState('')
  const [password, setPassword] = useState('')
  const [regNombre, setRegNombre] = useState('')
  const [regDni, setRegDni] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPass, setRegPass] = useState('')
  const [regPass2, setRegPass2] = useState('')

  const { login, register, loginInvitado } = useAuth()
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    setError('')
    if (!login(dni, password)) {
      setError('DNI o contraseña incorrectos.')
    } else {
      navigate('/inicio')
    }
  }

  function handleRegistro(e) {
    e.preventDefault()
    setError('')
    if (!regNombre || !regDni || !regEmail || !regPass) {
      setError('Completá todos los campos.')
      return
    }
    if (regPass !== regPass2) {
      setError('Las contraseñas no coinciden.')
      return
    }
    if (regPass.length < 4) {
      setError('La contraseña debe tener al menos 4 caracteres.')
      return
    }
    const res = register({ nombre: regNombre, dni: regDni, email: regEmail, password: regPass })
    if (!res.ok) {
      setError(res.error)
    } else {
      navigate('/inicio')
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <h1 className="login-title">TIADET</h1>
            <p className="login-subtitle">
              Taller Interactivo Avanzado en Enseñanza a Distancia con Tecnologías
            </p>
          </div>

          <div className="login-tabs">
            <button
              className={`login-tab ${modo === 'login' ? 'active' : ''}`}
              onClick={() => {
                setModo('login')
                setError('')
              }}
            >
              Ingresar
            </button>
            <button
              className={`login-tab ${modo === 'registro' ? 'active' : ''}`}
              onClick={() => {
                setModo('registro')
                setError('')
              }}
            >
              Inscribirse
            </button>
          </div>

          {modo === 'login' ? (
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label className="form-label">DNI / Legajo</label>
                <input
                  type="text"
                  placeholder="Ej: 12345678"
                  value={dni}
                  onChange={e => setDni(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label className="form-label">Contraseña</label>
                <div className="password-input-wrapper">
                  <input
                    type={verPass ? 'text' : 'password'}
                    placeholder="Contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setVerPass(!verPass)}
                    title={verPass ? 'Ocultar' : 'Mostrar'}
                  >
                    {verPass ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
              </div>

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="btn btn-primary btn-block">
                Ingresar
              </button>

              <button
                type="button"
                className="btn-guest-link"
                onClick={() => {
                  loginInvitado()
                  navigate('/inicio')
                }}
              >
                Continuar como invitado
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegistro} className="login-form">
              <div className="form-group">
                <label className="form-label">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Ej: María García"
                  value={regNombre}
                  onChange={e => setRegNombre(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label className="form-label">DNI</label>
                <input
                  type="text"
                  placeholder="Sin puntos"
                  value={regDni}
                  onChange={e => setRegDni(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="usuario@mail.com"
                  value={regEmail}
                  onChange={e => setRegEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Contraseña</label>
                <div className="password-input-wrapper">
                  <input
                    type={verPass ? 'text' : 'password'}
                    placeholder="Mínimo 4 caracteres"
                    value={regPass}
                    onChange={e => setRegPass(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setVerPass(!verPass)}
                  >
                    {verPass ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Repetir contraseña</label>
                <input
                  type={verPass ? 'text' : 'password'}
                  placeholder="Repetí la contraseña"
                  value={regPass2}
                  onChange={e => setRegPass2(e.target.value)}
                />
              </div>

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="btn btn-primary btn-block">
                Crear cuenta
              </button>
            </form>
          )}

          <p className="login-demo">
            Demo: alumno <code>12345678</code> / <code>1234</code>
          </p>
        </div>
      </div>
    </div>
  )
}
