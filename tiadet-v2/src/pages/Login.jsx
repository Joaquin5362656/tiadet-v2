import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext'
import './Login.css'

export default function Login() {
  const [modo, setModo]             = useState('login') // 'login' | 'registro'
  const [verPass, setVerPass]       = useState(false)
  const [error, setError]           = useState('')
  const [cargando, setCargando]     = useState(false)

  // Login
  const [dni, setDni]               = useState('')
  const [password, setPassword]     = useState('')

  // Registro
  const [regNombre, setRegNombre]   = useState('')
  const [regDni, setRegDni]         = useState('')
  const [regEmail, setRegEmail]     = useState('')
  const [regPass, setRegPass]       = useState('')
  const [regPass2, setRegPass2]     = useState('')

  const { login, register, loginInvitado } = useAuth()
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault(); setError('')
    if (!login(dni, password)) setError('DNI o contraseña incorrectos.')
    else navigate('/inicio')
  }

  function handleRegistro(e) {
    e.preventDefault(); setError('')
    if (!regNombre || !regDni || !regEmail || !regPass) return setError('Completá todos los campos.')
    if (regPass !== regPass2) return setError('Las contraseñas no coinciden.')
    if (regPass.length < 4) return setError('La contraseña debe tener al menos 4 caracteres.')
    const res = register({ nombre: regNombre, dni: regDni, email: regEmail, password: regPass })
    if (!res.ok) setError(res.error)
    else navigate('/inicio')
  }

  return (
    <div className="login-shell">
      <div className="login-card">
        <div className="login-brand">
          <span className="login-sigla">TIADET</span>
          <p className="login-nombre-completo">Taller Interactivo Avanzado en Enseñanza<br />a Distancia con Tecnologías</p>
          <p className="login-inst">Facultad de Medicina — UBA · 2025</p>
        </div>

        <div className="login-tabs">
          <button className={`login-tab ${modo==='login'?'active':''}`} onClick={()=>{setModo('login');setError('')}}>Ingresar</button>
          <button className={`login-tab ${modo==='registro'?'active':''}`} onClick={()=>{setModo('registro');setError('')}}>Inscribirse</button>
        </div>

        {modo === 'login' ? (
          <form onSubmit={handleLogin} className="login-form">
            <label className="form-label">DNI / Legajo</label>
            <input type="text" placeholder="Ej: 12345678" value={dni} onChange={e=>setDni(e.target.value)} autoFocus />

            <label className="form-label" style={{marginTop:14}}>Contraseña</label>
            <div className="pass-wrap">
              <input type={verPass?'text':'password'} placeholder="Contraseña" value={password} onChange={e=>setPassword(e.target.value)} />
              <button type="button" className="pass-toggle" onClick={()=>setVerPass(v=>!v)} title={verPass?'Ocultar':'Mostrar'}>
                {verPass ? '🙈' : '👁'}
              </button>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="btn-primary" style={{marginTop:18,width:'100%',padding:'11px'}}>Ingresar</button>

            <button type="button" className="btn-guest" onClick={()=>{loginInvitado();navigate('/inicio')}}>
              Continuar como invitado
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegistro} className="login-form">
            <label className="form-label">Nombre completo</label>
            <input type="text" placeholder="Ej: María García" value={regNombre} onChange={e=>setRegNombre(e.target.value)} autoFocus />

            <label className="form-label" style={{marginTop:12}}>DNI</label>
            <input type="text" placeholder="Sin puntos" value={regDni} onChange={e=>setRegDni(e.target.value)} />

            <label className="form-label" style={{marginTop:12}}>Email institucional</label>
            <input type="email" placeholder="usuario@mail.com" value={regEmail} onChange={e=>setRegEmail(e.target.value)} />

            <label className="form-label" style={{marginTop:12}}>Contraseña</label>
            <div className="pass-wrap">
              <input type={verPass?'text':'password'} placeholder="Mínimo 4 caracteres" value={regPass} onChange={e=>setRegPass(e.target.value)} />
              <button type="button" className="pass-toggle" onClick={()=>setVerPass(v=>!v)}>{verPass?'🙈':'👁'}</button>
            </div>

            <label className="form-label" style={{marginTop:12}}>Repetir contraseña</label>
            <input type={verPass?'text':'password'} placeholder="Repetí la contraseña" value={regPass2} onChange={e=>setRegPass2(e.target.value)} />

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="btn-primary" style={{marginTop:18,width:'100%',padding:'11px'}}>Crear cuenta</button>
          </form>
        )}

        <p className="login-demo">Demo — alumno: <code>12345678</code> / <code>1234</code> · docente: <code>prof001</code> / <code>prof</code></p>
      </div>
    </div>
  )
}
