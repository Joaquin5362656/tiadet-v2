import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../components/AuthContext'
import './Participantes.css'

const ALFABETO = ['Todos', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function Participantes() {
  const { usuarios } = useAuth()
  const [letraSeleccionada, setLetra] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  let filtrados = usuarios
  if (letraSeleccionada !== 'Todos') {
    filtrados = filtrados.filter(u => u.nombre.toUpperCase().startsWith(letraSeleccionada))
  }
  if (busqueda) {
    filtrados = filtrados.filter(u =>
      u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      u.dni.includes(busqueda)
    )
  }

  const porLetra = {}
  filtrados.forEach(u => {
    const letra = u.nombre[0].toUpperCase()
    if (!porLetra[letra]) porLetra[letra] = []
    porLetra[letra].push(u)
  })
  const letras = Object.keys(porLetra).sort()

  return (
    <>
      <Navbar />
      <div className="page-content">
        <div style={{ marginBottom: 24 }}>
          <h1>Participantes del taller</h1>
          <p style={{ color: 'var(--color-text-tertiary)', marginTop: 4 }}>
            Total: {usuarios.length} alumnos inscriptos
          </p>
        </div>

        {/* Buscador */}
        <div className="card" style={{ marginBottom: 20, padding: 12 }}>
          <input
            type="text"
            placeholder="Buscar por nombre o DNI..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            style={{ marginBottom: 0 }}
          />
        </div>

        {/* Filtro alfabético */}
        <div className="particip-alfabeto">
          {ALFABETO.map(letra => (
            <button
              key={letra}
              className={`particip-letra-btn ${letraSeleccionada === letra ? 'active' : ''}`}
              onClick={() => setLetra(letra)}
            >
              {letra}
            </button>
          ))}
        </div>

        {/* Lista */}
        {filtrados.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon" style={{ fontSize: 48 }}>—</div>
            <p className="empty-state-text">No hay participantes con esos criterios.</p>
          </div>
        ) : (
          <div className="particip-grid">
            {letras.map(letra => (
              <div key={letra}>
                <h3 className="particip-grupo-letra">{letra}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
                  {porLetra[letra].map(u => (
                    <div key={u.id} className="particip-card card">
                      <div className="particip-avatar">
                        {u.foto ? <img src={u.foto} alt="" /> : u.nombre.split(' ').slice(0, 2).map(p => p[0]).join('')}
                      </div>
                      <div className="particip-info">
                        <p className="particip-nombre">{u.nombre}</p>
                        <p className="particip-legajo">{u.legajo}</p>
                        <p className="particip-email">{u.email}</p>
                      </div>
                      <span className="badge badge-primary">{u.rol}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
