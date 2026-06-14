import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { MODULOS } from '../data/datos'
import './Modulos.css'

const ESTADO_CFG = {
  completado: { cls: 'badge-success', label: 'Completado' },
  en_curso:   { cls: 'badge-primary', label: 'En curso' },
  pendiente:  { cls: 'badge-gray',    label: 'Disponible' },
}
const ICONO_REC = { video: '▶', pdf: '📄', link: '🔗' }

export function ModulosList() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className="page-content">
        <h1 className="page-title">Módulos</h1>
        <p className="page-subtitle">5 módulos · Hacé clic en uno para ver su contenido.</p>
        <div className="mod-lista">
          {MODULOS.map(m => {
            const cfg = ESTADO_CFG[m.estado]
            return (
              <div key={m.id} className="card mod-card mod-activo" onClick={() => navigate(`/modulos/${m.id}`)}>
                <div className="mod-num">{m.numero}</div>
                <div className="mod-body">
                  <div className="mod-head">
                    <h2 className="mod-titulo">{m.titulo}</h2>
                    <span className={`badge ${cfg.cls}`}>{cfg.label}</span>
                  </div>
                  <p className="mod-desc">{m.descripcion}</p>
                  <div className="mod-temas">
                    {m.temas.map(t => <span key={t} className="badge badge-gray mod-tema">{t}</span>)}
                  </div>
                  <div className="mod-footer">
                    <span className="mod-rec-count">{m.recursos.length} recursos</span>
                    <span className="mod-link-hint">Ver módulo →</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export function ModuloDetalle() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const m        = MODULOS.find(m => m.id === Number(id))

  if (!m) {
    return (
      <>
        <Navbar />
        <div className="page-content">
          <p>Módulo no encontrado.</p>
        </div>
      </>
    )
  }

  const videos = m.recursos.filter(r => r.tipo === 'video')
  const otros  = m.recursos.filter(r => r.tipo !== 'video')

  return (
    <>
      <Navbar />
      <div className="page-content">
        <nav className="mod-breadcrumb">
          <button className="btn-ghost" onClick={() => navigate('/modulos')}>Módulos</button>
          <span className="mod-bread-sep">/</span>
          <span className="mod-bread-actual">Módulo {m.numero}</span>
        </nav>

        <div className="mod-detalle-header">
          <span className="mod-detalle-num">{m.numero}</span>
          <div>
            <h1 className="mod-detalle-titulo">{m.titulo}</h1>
            <p className="mod-detalle-desc">{m.descripcion}</p>
          </div>
        </div>

        <div className="mod-detalle-grid">
          <div className="mod-detalle-main">
            {videos.length > 0 && (
              <section className="mod-section">
                <h2 className="section-label">Videos</h2>
                {videos.map((v, i) => (
                  <div key={i} className="mod-video-blk">
                    <p className="mod-video-label">{v.label}</p>
                    <div className="mod-video-ratio">
                      <iframe src={v.url} title={v.label} frameBorder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowFullScreen />
                    </div>
                  </div>
                ))}
              </section>
            )}

            <section className="mod-section">
              <h2 className="section-label">Resumen del módulo</h2>
              <div className="card mod-resumen-card">
                {m.resumen.split('\n\n').map((p, i) => <p key={i} className="mod-resumen-p">{p}</p>)}
              </div>
            </section>

            {otros.length > 0 && (
              <section className="mod-section">
                <h2 className="section-label">Bibliografía y recursos</h2>
                <div className="mod-recursos-lista">
                  {otros.map((r, i) => (
                    <a key={i} href={r.url} target="_blank" rel="noreferrer" className="card mod-recurso-row">
                      <span className="mod-rec-icono">{ICONO_REC[r.tipo]}</span>
                      <div className="mod-rec-body">
                        <span className="mod-rec-label">{r.label}</span>
                        <span className="badge badge-gray mod-rec-tipo">{r.tipo.toUpperCase()}</span>
                      </div>
                      <span className="mod-rec-arrow">→</span>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="mod-detalle-aside">
            <div className="card">
              <h2 className="section-label">Temas</h2>
              <ul className="mod-temas-ul">
                {m.temas.map(t => (
                  <li key={t} className="mod-tema-li"><span className="mod-tema-dot" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ marginTop: 14 }}>
              <h2 className="section-label">Ir a módulo</h2>
              {MODULOS.map(mod => (
                <button key={mod.id}
                  className={`mod-nav-btn ${mod.id === m.id ? 'mod-nav-active' : ''}`}
                  onClick={() => navigate(`/modulos/${mod.id}`)}>
                  <span className="mod-nav-num">{mod.numero}</span>
                  <span className="mod-nav-tit">{mod.titulo}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
