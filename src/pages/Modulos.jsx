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
            {m.horas_sincronicas != null && (
              <section className="mod-section mod-info-bar">
                <div className="mod-info-item">
                  <span className="mod-info-label">Carga horaria</span>
                  <span className="mod-info-value">{m.horas_sincronicas + m.horas_asincronicas}h totales</span>
                </div>
                <div className="mod-info-item">
                  <span className="mod-info-label">Sincrónicas</span>
                  <span className="mod-info-value">{m.horas_sincronicas}h</span>
                </div>
                <div className="mod-info-item">
                  <span className="mod-info-label">Asincrónicas</span>
                  <span className="mod-info-value">{m.horas_asincronicas}h</span>
                </div>
              </section>
            )}

            {m.objetivo && (
              <section className="mod-section">
                <h2 className="section-label">Objetivo</h2>
                <div className="card mod-resumen-card">
                  <p className="mod-resumen-p">{m.objetivo}</p>
                </div>
              </section>
            )}

            <section className="mod-section">
              <h2 className="section-label">Resumen del módulo</h2>
              <div className="card mod-resumen-card">
                {m.resumen.split('\n\n').map((p, i) => <p key={i} className="mod-resumen-p">{p}</p>)}
              </div>
            </section>

            {m.contenidos && m.contenidos.length > 0 && (
              <section className="mod-section">
                <h2 className="section-label">Contenidos</h2>
                <div className="card mod-contenidos-card">
                  <ul className="mod-contenidos-ul">
                    {m.contenidos.map((c, i) => (
                      <li key={i} className="mod-contenido-li">{c}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {m.recorridoSemanal && m.recorridoSemanal.length > 0 && (
              <section className="mod-section">
                <h2 className="section-label">Recorrido semanal</h2>
                <div className="rs-grid">
                  {m.recorridoSemanal.map(s => (
                    <div key={s.semana} className="card rs-card">
                      <div className="rs-card-head">
                        <span className="rs-semana">Semana {s.semana}</span>
                        <span className="rs-tema">{s.tema}</span>
                      </div>
                      <p className="rs-contenidos">{s.contenidos}</p>
                      <div className="rs-actividad">
                        <span className="rs-act-label">Actividad</span>
                        <span className="rs-act-texto">{s.actividad}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {m.actividades_desc && m.actividades_desc.length > 0 && (
              <section className="mod-section">
                <h2 className="section-label">Actividades del módulo</h2>
                <div className="card mod-actividades-card">
                  <ul className="mod-actividades-ul">
                    {m.actividades_desc.map((a, i) => (
                      <li key={i} className="mod-actividad-li">{a}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

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
