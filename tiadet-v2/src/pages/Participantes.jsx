import { useState } from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../components/AuthContext'
import './Participantes.css'

export default function Participantes() {
  const { usuarios } = useAuth()
  const [busqueda, setBusqueda] = useState('')

  const filtrados = usuarios.filter(u=>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.dni.includes(busqueda)
  )

  const porLetra = {}
  filtrados.forEach(u=>{
    const letra = u.nombre[0].toUpperCase()
    if (!porLetra[letra]) porLetra[letra] = []
    porLetra[letra].push(u)
  })
  const letras = Object.keys(porLetra).sort()

  return (
    <Layout title="Participantes">
      <h1 className="page-title">Participantes del taller</h1>
      <p className="page-subtitle">Total: {usuarios.length} alumnos inscriptos</p>

      <div className="particip-busqueda-box card">
        <input
          type="text"
          placeholder="Buscar por nombre o DNI..."
          value={busqueda}
          onChange={e=>setBusqueda(e.target.value)}
          className="particip-search-input"
        />
        {busqueda && (
          <button className="particip-clear-btn" onClick={()=>setBusqueda('')}>✕</button>
        )}
      </div>

      {filtrados.length===0 ? (
        <div className="empty-state"><div className="empty-state-icon">👥</div><p className="empty-state-text">No hay participantes que coincidan con "{busqueda}".</p></div>
      ) : (
        <div className="particip-grupos">
          {letras.map(letra=>(
            <div key={letra} className="particip-grupo">
              <h2 className="particip-letra">{letra}</h2>
              <div className="particip-lista">
                {porLetra[letra].map(u=>(
                  <div key={u.id} className="particip-card card">
                    <div className="particip-avatar">
                      {u.foto ? <img src={u.foto} alt="" /> : u.nombre.split(' ').slice(0,2).map(p=>p[0]).join('')}
                    </div>
                    <div className="particip-info">
                      <p className="particip-nombre">{u.nombre}</p>
                      <p className="particip-legajo">{u.legajo}</p>
                      <p className="particip-email">{u.email}</p>
                    </div>
                    <span className="badge badge-gray">{u.rol}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}
