import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import './Sidebar.css'

const NAV = [
  { to: '/inicio',        icon: '🏠', label: 'Inicio' },
  { to: '/modulos',       icon: '📚', label: 'Módulos' },
]

const NAV_ALUMNO = [
  { to: '/actividades',   icon: '✅', label: 'Actividades' },
  { to: '/foros',         icon: '💬', label: 'Foros' },
  { to: '/tfi',           icon: '📋', label: 'TFI' },
  { to: '/area-personal', icon: '👤', label: 'Área Personal' },
  { to: '/participantes', icon: '👥', label: 'Participantes' },
  { to: '/extras',        icon: '✨', label: 'Actividades Extra' },
]

export default function Sidebar() {
  const { usuario, logout } = useAuth()
  const navigate            = useNavigate()
  const esInvitado          = usuario?.rol === 'invitado'
  const iniciales           = esInvitado ? '?' : (usuario?.nombre || '').split(' ').slice(0,2).map(p=>p[0]).join('')

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-sigla">TIADET</span>
        <span className="sidebar-sub">Taller Interactivo Avanzado en Enseñanza a Distancia con Tecnologías</span>
      </div>

      <nav className="sidebar-nav">
        {NAV.map(item => (
          <NavLink key={item.to} to={item.to} className={({isActive})=>`nav-link${isActive?' active':''}`}>
            <span className="nav-icon">{item.icon}</span>{item.label}
          </NavLink>
        ))}

        {!esInvitado && (
          <>
            <span className="sidebar-section-label">Taller</span>
            {NAV_ALUMNO.map(item => (
              <NavLink key={item.to} to={item.to} className={({isActive})=>`nav-link${isActive?' active':''}`}>
                <span className="nav-icon">{item.icon}</span>{item.label}
              </NavLink>
            ))}
          </>
        )}

        {esInvitado && (
          <div className="guest-nav-note">
            <span>Acceso limitado</span>
            <button className="btn-ghost" style={{fontSize:12}} onClick={() => { logout(); navigate('/login') }}>
              Iniciar sesión →
            </button>
          </div>
        )}
      </nav>

      <div className="sidebar-user">
        <div className="user-avatar">
          {usuario?.foto ? <img src={usuario.foto} alt="" /> : iniciales}
        </div>
        <div className="user-info">
          <div className="user-name">{usuario?.nombre}</div>
          <div className="user-role">{esInvitado ? 'Invitado' : usuario?.rol === 'docente' ? 'Docente' : 'Alumno'}</div>
        </div>
        <button className="btn-logout" title="Salir" onClick={() => { logout(); navigate('/login') }}>⎋</button>
      </div>
    </aside>
  )
}
