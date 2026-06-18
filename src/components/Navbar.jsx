import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import './Navbar.css'

const NAV_ITEMS = [
  { to: '/inicio',        label: 'Inicio' },
  { to: '/actividades',   label: 'Actividades' },
  { to: '/foros',         label: 'Foros' },
  { to: '/tfi',           label: 'TFI' },
  { to: '/area-personal', label: 'Área Personal' },
  { to: '/participantes', label: 'Participantes' },
  { to: '/bitacora',      label: 'Bitácora' },
]

export default function Navbar() {
  const { usuario, logout } = useAuth()
  const navigate = useNavigate()
  const esInvitado = usuario?.rol === 'invitado'

  const iniciales = usuario?.nombre
    ?.split(' ')
    .slice(0, 2)
    .map(p => p[0])
    .join('')

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <span className="navbar-sigla">TIA-EDiT</span>
          <span className="navbar-sep">|</span>
          <span className="navbar-full">Taller Interactivo Avanzado en EaD</span>
        </div>

        {/* Links */}
        <div className="navbar-links">
          {esInvitado ? (
            <span className="navbar-guest-label">Modo invitado</span>
          ) : (
            NAV_ITEMS.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))
          )}
        </div>

        {/* User */}
        <div className="navbar-user">
          <div className="navbar-avatar">
            {usuario?.foto ? (
              <img src={usuario.foto} alt="" />
            ) : (
              iniciales
            )}
          </div>
          <span className="navbar-name">{usuario?.nombre}</span>
          <button
            className="btn-logout"
            onClick={handleLogout}
            title="Salir de la sesión"
          >
            Salir
          </button>
        </div>
      </div>
    </nav>
  )
}
