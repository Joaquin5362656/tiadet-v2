import { useState } from 'react'
import Navbar from '../components/Navbar'
import { ACTIVIDADES_INICIALES, MODULOS } from '../data/datos'
import imgLanin from '../assets/lanin.jpeg'
import './Actividades.css'

const TIPO_CFG = {
  tarea:    { icon:'Ta', label:'Tarea' },
  encuesta: { icon:'En', label:'Encuesta' },
  foro:     { icon:'Fo', label:'Foro' },
  examen:   { icon:'Ex', label:'Examen' },
}
const ESTADO_CFG = {
  completada: { badge:'badge-success',  label:'Completada' },
  pendiente:  { badge:'badge-warning',   label:'Pendiente' },
  proximo:    { badge:'badge-gray',   label:'Proximo' },
}
const MEDALLA_CFG = {
  oro:    { emoji:'🥇', label:'Oro',    color:'var(--medal-oro)' },
  plata:  { emoji:'🥈', label:'Plata',  color:'var(--medal-plata)' },
  bronce: { emoji:'🥉', label:'Bronce', color:'var(--medal-bronce)' },
}
const MEDALLA_INFO = [
  { medalla:'oro',    emoji:'🥇', titulo:'Oro — Cumbre del aprendizaje',   descripcion:'Desempeño sobresaliente (≥90%). Has alcanzado la cima del volcán de aprendizaje, demostrando excelencia y dominio completo de las competencias del Taller.' },
  { medalla:'plata',  emoji:'🥈', titulo:'Plata — Ascenso significativo',   descripcion:'Desempeño destacado (≥70%). Avance sólido en la ruta de aprendizaje con consolidación de competencias clave.' },
  { medalla:'bronce', emoji:'🥉', titulo:'Bronce — Primeros pasos',        descripcion:'Desempeño inicial (≥50%). Has comenzado el ascenso. Se recomienda reforzar y profundizar en los contenidos.' },
]
const FILTROS = ['Todas', 'Pendiente', 'Completada']

function asignarMedalla(puntaje, puntajeMax) {
  if (puntaje == null || puntajeMax == null) return null
  const pct = puntaje / puntajeMax
  if (pct >= 0.9) return 'oro'
  if (pct >= 0.7) return 'plata'
  return 'bronce'
}

export default function Actividades() {
  const [acts, setActs]       = useState(ACTIVIDADES_INICIALES)
  const [filtro, setFiltro]   = useState('Todas')
  const [abierta, setAbierta] = useState(null)
  const [respEncuesta, setRespEncuesta] = useState({})
  const [encuestaEnviada, setEncuestaEnviada] = useState({})
  const [archivoNombre, setArchivoNombre] = useState({})
  const [linkEntrega, setLinkEntrega] = useState({})

  const completadas = acts.filter(a=>a.estado==='completada').length
  const pendientes  = acts.filter(a=>a.estado==='pendiente').length
  const pct         = Math.round((completadas / acts.filter(a=>a.estado!=='proximo').length) * 100) || 0

  const filtradas = acts.filter(a=>{
    if (filtro==='Todas') return true
    return ESTADO_CFG[a.estado].label === filtro
  })

  function marcarCompleta(id) {
    setActs(prev=>prev.map(a=>{
      if (a.id!==id) return a
      const puntaje = a.puntaje ?? a.puntajeMax
      const medalla = asignarMedalla(puntaje, a.puntajeMax)
      return { ...a, estado:'completada', puntaje, medalla }
    }))
  }

  function handleArchivo(id, e) {
    const f = e.target.files[0]
    if (f) setArchivoNombre(prev=>({...prev,[id]:f.name}))
  }

  function handleEnviarEncuesta(act) {
    setEncuestaEnviada(prev=>({...prev,[act.id]:true}))
    marcarCompleta(act.id)
  }

  return (
    <>
      <Navbar />
      <div className="page-content">
        <div className="act-layout">
          {/* === Columna principal: actividades === */}
          <div className="act-col-main">
            {/* Resumen */}
            <div className="act-resumen card">
              <div className="act-stat-blk">
                <span className="act-stat-num accent">{pct}%</span>
                <span className="act-stat-lbl">completado</span>
              </div>
              <div className="act-bar-blk">
                <div className="progress-track"><div className="progress-fill" style={{width:`${pct}%`}}/></div>
                <div className="act-bar-detail">
                  <span>{completadas} completadas</span>
                  <span className="warn-txt">{pendientes} pendientes</span>
                </div>
              </div>
            </div>

            {/* Filtros */}
            <div className="act-filtros-row">
              {FILTROS.map(f=>(
                <button key={f} className={`act-filtro-btn ${filtro===f?'act-filtro-active':''}`} onClick={()=>setFiltro(f)}>{f}</button>
              ))}
            </div>

            {/* Lista */}
            <div className="acts-lista">
              {filtradas.map(a=>{
                const tcfg  = TIPO_CFG[a.tipo]||{icon:'•',label:a.tipo}
                const ecfg  = ESTADO_CFG[a.estado]
                const mod   = MODULOS.find(m=>m.id===a.modulo)
                const open  = abierta===a.id
                const mcfg  = a.medalla ? MEDALLA_CFG[a.medalla] : null

                return (
                  <div key={a.id} className={`act-card card ${open?'act-open':''}`}>
                    <div className="act-head" onClick={()=>setAbierta(open?null:a.id)}>
                      <span className="act-icon">{tcfg.icon}</span>
                      <div className="act-info">
                        <p className="act-titulo">{a.titulo}</p>
                        <div className="act-meta">
                          <span className="badge badge-gray">{tcfg.label}</span>
                          {mod && <span className="act-mod-tag">Modulo {mod.numero}</span>}
                          <span className="act-venc">Vence {a.vencimiento}</span>
                        </div>
                      </div>
                      <div className="act-right">
                        {a.estado==='completada' && mcfg && (
                          <span className="act-medalla" style={{color:mcfg.color}} title={mcfg.label}>{mcfg.emoji}</span>
                        )}
                        <span className={`badge ${ecfg.badge}`}>{ecfg.label}</span>
                        <span className="act-chevron">{open?'▲':'▼'}</span>
                      </div>
                    </div>

                    {open && (
                      <div className="act-body">
                        <p className="act-descripcion">{a.descripcion}</p>

                        {/* Encuesta */}
                        {a.tipo==='encuesta' && a.preguntas && !encuestaEnviada[a.id] && a.estado==='pendiente' && (
                          <div className="encuesta-blk">
                            <h4 className="section-label">Preguntas</h4>
                            {a.preguntas.map(q=>(
                              <div key={q.id} className="encuesta-pregunta">
                                <p className="enc-q-texto">{q.texto}</p>
                                <div className="enc-opciones">
                                  {q.opciones.map((op,i)=>(
                                    <label key={i} className="enc-opcion">
                                      <input type="radio" name={`${a.id}-${q.id}`}
                                        checked={respEncuesta[`${a.id}-${q.id}`]===i}
                                        onChange={()=>setRespEncuesta(prev=>({...prev,[`${a.id}-${q.id}`]:i}))}
                                      />
                                      <span>{op}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <button className="btn-primary" style={{marginTop:12}} onClick={()=>handleEnviarEncuesta(a)}>
                              Enviar encuesta
                            </button>
                          </div>
                        )}
                        {encuestaEnviada[a.id] && <p className="enc-enviada">Encuesta enviada correctamente.</p>}

                        {/* Tarea pendiente */}
                        {a.tipo==='tarea' && a.estado==='pendiente' && (
                          <div className="entrega-blk">
                            <h4 className="section-label">Entregar actividad</h4>
                            <label style={{fontSize:13,fontWeight:600,color:'var(--color-text-secondary)',display:'block',marginBottom:6}}>Link (Google Drive, YouTube, etc.)</label>
                            <input type="url" placeholder="https://..." value={linkEntrega[a.id]||''} onChange={e=>setLinkEntrega(p=>({...p,[a.id]:e.target.value}))} />
                            <label style={{fontSize:13,fontWeight:600,color:'var(--color-text-secondary)',display:'block',margin:'12px 0 6px'}}>O subir archivo</label>
                            <label className="file-upload-area">
                              <input type="file" style={{display:'none'}} onChange={e=>handleArchivo(a.id,e)} />
                              {archivoNombre[a.id] ? <span className="file-chosen">Archivo: {archivoNombre[a.id]}</span> : <span className="file-placeholder">Selecciona un archivo (PDF, DOC...)</span>}
                            </label>
                            <button className="btn-primary" style={{marginTop:14}}
                              disabled={!linkEntrega[a.id] && !archivoNombre[a.id]}
                              onClick={()=>marcarCompleta(a.id)}>
                              Enviar entrega
                            </button>
                          </div>
                        )}

                        {/* Completada — medalla */}
                        {a.estado==='completada' && mcfg && (
                          <div className="medalla-bar">
                            <span className="medalla-premio">{mcfg.emoji}</span>
                            <div className="medalla-info">
                              <span className="medalla-label" style={{color:mcfg.color}}>{mcfg.label}</span>
                              <span className="medalla-desc">
                                {a.medalla==='oro' ? 'Desempeño sobresaliente. ¡Has alcanzado la cumbre del aprendizaje!' :
                                 a.medalla==='plata' ? 'Desempeño destacado. Avance significativo en tu ruta de aprendizaje.' :
                                 'Desempeño inicial. Sigue profundizando para alcanzar la cima.'}
                              </span>
                            </div>
                          </div>
                        )}
                        {a.estado==='completada' && a.retroalimentacion && (
                          <div className="retro-blk">
                            <span className="retro-label">Retroalimentación del docente</span>
                            <p className="retro-texto">{a.retroalimentacion}</p>
                            <span className="retro-firma">— Dra. Ana Méndez</span>
                          </div>
                        )}

                        {a.estado==='proximo' && <p className="act-proximo-msg">Esta actividad aun no esta disponible.</p>}

                        {/* Marcar como completada (foro) */}
                        {a.tipo==='foro' && a.estado==='pendiente' && (
                          <button className="btn-secondary" style={{marginTop:10}} onClick={()=>marcarCompleta(a.id)}>
                            OK Marcar como completada
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* === Sidebar: imagen LANIN + leyenda de medallas === */}
          <aside className="act-sidebar">
            <div className="act-sidebar-card card">
              <figure className="act-lanin-fig">
                <img src={imgLanin} alt="Volcán LANIN — Metáfora del ascenso al aprendizaje" className="act-lanin-img" />
                <figcaption className="act-lanin-caption">
                  <strong>Volcán LANIN</strong> — Metáfora del ascenso al aprendizaje
                </figcaption>
              </figure>

              <div className="act-leyenda">
                <h4 className="act-leyenda-titulo">Premios del recorrido</h4>
                <p className="act-leyenda-intro">
                  Cada actividad completada te acerca a la cumbre. Según tu desempeño, recibirás una medalla que refleja tu progreso en el ascenso al volcán del aprendizaje.
                </p>
                {MEDALLA_INFO.map(m => (
                  <div key={m.medalla} className="act-leyenda-item">
                    <span className="act-leyenda-emoji">{m.emoji}</span>
                    <div className="act-leyenda-texto">
                      <strong>{m.titulo}</strong>
                      <p>{m.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
