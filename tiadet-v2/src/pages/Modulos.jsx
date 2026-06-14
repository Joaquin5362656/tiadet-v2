import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { MODULOS } from '../data/datos'
import './Modulos.css'

const ESTADO_CFG = {
  completado: { badge:'badge-green', label:'Completado' },
  en_curso:   { badge:'badge-blue',  label:'En curso' },
  bloqueado:  { badge:'badge-gray',  label:'Bloqueado' },
}
const ICONO_REC = { video:'▶', pdf:'📄', link:'🔗' }

export function ModulosList() {
  const navigate = useNavigate()
  return (
    <Layout title="Módulos">
      <h1 className="page-title">Contenido del curso</h1>
      <p className="page-subtitle">5 módulos · Hacé clic en uno disponible para ver su contenido.</p>
      <div className="modulos-full-lista">
        {MODULOS.map(m => {
          const cfg    = ESTADO_CFG[m.estado]
          const activo = m.estado !== 'bloqueado'
          return (
            <div key={m.id} className={`mod-card card ${activo?'mod-activo':'mod-bloqueado'}`} onClick={()=>activo&&navigate(`/modulos/${m.id}`)}>
              <div className="mod-num">{m.numero}</div>
              <div className="mod-body">
                <div className="mod-head">
                  <h2 className="mod-titulo">{m.titulo}</h2>
                  <span className={`badge ${cfg.badge}`}>{cfg.label}</span>
                </div>
                <p className="mod-desc">{m.descripcion}</p>
                <div className="mod-temas">
                  {m.temas.map(t=><span key={t} className="badge badge-gray mod-tema">{t}</span>)}
                </div>
                <div className="mod-footer">
                  <span className="mod-rec-count">{m.recursos.length} recursos</span>
                  {activo && <span className="mod-link-hint">Ver módulo →</span>}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export function ModuloDetalle() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const m        = MODULOS.find(m=>m.id===Number(id))

  if (!m) return <Layout title="Módulo"><p>No encontrado.</p></Layout>

  const videos = m.recursos.filter(r=>r.tipo==='video')
  const otros  = m.recursos.filter(r=>r.tipo!=='video')

  return (
    <Layout title={`Módulo ${m.numero}`}>
      <nav className="breadcrumb">
        <button className="btn-ghost" onClick={()=>navigate('/modulos')}>Módulos</button>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">Módulo {m.numero}</span>
      </nav>

      <div className="detalle-header">
        <span className="detalle-num-big">{m.numero}</span>
        <div>
          <h1 className="detalle-titulo">{m.titulo}</h1>
          <p className="detalle-desc-sub">{m.descripcion}</p>
        </div>
      </div>

      <div className="detalle-grid">
        <div className="detalle-main">
          {videos.length > 0 && (
            <section className="det-section">
              <h2 className="section-label">Videos</h2>
              {videos.map((v,i)=>(
                <div key={i} className="video-blk">
                  <p className="video-label-txt">{v.label}</p>
                  <div className="video-ratio">
                    <iframe src={v.url} title={v.label} frameBorder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowFullScreen />
                  </div>
                </div>
              ))}
            </section>
          )}

          <section className="det-section">
            <h2 className="section-label">Resumen del módulo</h2>
            <div className="card resumen-card">
              {m.resumen.split('\n\n').map((p,i)=><p key={i} className="resumen-p">{p}</p>)}
            </div>
          </section>

          {otros.length > 0 && (
            <section className="det-section">
              <h2 className="section-label">Bibliografía y recursos</h2>
              <div className="recursos-lista">
                {otros.map((r,i)=>(
                  <a key={i} href={r.url} target="_blank" rel="noreferrer" className="recurso-row card">
                    <span className="rec-icono">{ICONO_REC[r.tipo]}</span>
                    <div className="rec-body">
                      <span className="rec-label">{r.label}</span>
                      <span className="badge badge-gray rec-tipo">{r.tipo.toUpperCase()}</span>
                    </div>
                    <span style={{color:'var(--text-3)'}}>→</span>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="detalle-aside">
          <div className="card">
            <h2 className="section-label">Temas</h2>
            <ul className="temas-ul">
              {m.temas.map(t=>(
                <li key={t} className="tema-li"><span className="tema-dot" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="card" style={{marginTop:14}}>
            <h2 className="section-label">Ir a módulo</h2>
            {MODULOS.map(mod=>(
              <button key={mod.id} disabled={mod.estado==='bloqueado'}
                className={`nav-mod-btn ${mod.id===m.id?'nav-mod-active':''} ${mod.estado==='bloqueado'?'nav-mod-locked':''}`}
                onClick={()=>mod.estado!=='bloqueado'&&navigate(`/modulos/${mod.id}`)}>
                <span className="nav-mod-num">{mod.numero}</span>
                <span className="nav-mod-tit">{mod.titulo}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </Layout>
  )
}
