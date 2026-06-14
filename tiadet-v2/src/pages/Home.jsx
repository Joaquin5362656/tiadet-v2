import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext'
import Layout from '../components/Layout'
import { ANUNCIOS, NOVEDADES, MODULOS } from '../data/datos'
import './Home.css'

const ANUNCIO_ICON = { danger:'⚠', warn:'📅', info:'ℹ', success:'✓' }
const ESTADO_CFG = {
  completado: { badge:'badge-green', label:'Completado' },
  en_curso:   { badge:'badge-blue',  label:'En curso' },
  bloqueado:  { badge:'badge-gray',  label:'Bloqueado' },
}
const CAT_BADGE = { 'Educación médica':'badge-blue', 'Tecnología':'badge-green', 'Salud pública':'badge-warn' }

export default function Home() {
  const { usuario } = useAuth()
  const navigate    = useNavigate()
  const esInvitado  = usuario?.rol === 'invitado'

  return (
    <Layout title="Inicio">
      {esInvitado && (
        <div className="guest-banner">
          <span>👁</span>
          Estás navegando como invitado. Podés ver las novedades y los módulos, pero no tenés acceso a actividades, foros ni área personal.
        </div>
      )}

      {/* Anuncios — solo para autenticados */}
      {!esInvitado && (
        <section className="home-section">
          <h2 className="section-label">Anuncios del curso</h2>
          <div className="anuncios-lista">
            {ANUNCIOS.map(a => (
              <div key={a.id} className={`anuncio-item anuncio-${a.tipo}`}>
                <span>{ANUNCIO_ICON[a.tipo]}</span>
                <span>{a.texto}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Novedades mundiales */}
      <section className="home-section">
        <h2 className="section-label">Novedades en medicina y educación</h2>
        <div className="novedades-grid">
          {NOVEDADES.map(n => (
            <a key={n.id} href={n.url} target="_blank" rel="noreferrer" className="novedad-card card">
              <div className="novedad-top">
                <span className={`badge ${CAT_BADGE[n.categoria]||'badge-gray'}`}>{n.categoria}</span>
                <span className="novedad-fecha">{n.fecha}</span>
              </div>
              <h3 className="novedad-titulo">{n.titulo}</h3>
              <p className="novedad-resumen">{n.resumen}</p>
              <span className="novedad-fuente">{n.fuente} →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Módulos */}
      <section className="home-section">
        <div className="section-row">
          <h2 className="section-label" style={{marginBottom:0}}>Módulos del curso</h2>
          {!esInvitado && <button className="btn-ghost" onClick={()=>navigate('/modulos')}>Ver todos →</button>}
        </div>
        <div className="modulos-home-lista">
          {MODULOS.map(m => {
            const cfg    = ESTADO_CFG[m.estado]
            const activo = m.estado !== 'bloqueado'
            return (
              <div
                key={m.id}
                className={`modulo-home-row ${activo?'modulo-activo':'modulo-bloqueado'}`}
                onClick={()=>activo && navigate(`/modulos/${m.id}`)}
              >
                <span className={`modulo-num-badge ${m.estado}`}>{m.numero}</span>
                <div className="modulo-home-body">
                  <span className="modulo-home-titulo">{m.titulo}</span>
                  <span className="modulo-home-desc">{m.descripcion}</span>
                </div>
                <span className={`badge ${cfg.badge}`}>{cfg.label}</span>
                {activo && <span className="modulo-arrow">›</span>}
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
