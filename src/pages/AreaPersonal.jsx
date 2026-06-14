import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../components/AuthContext'
import { EVENTOS, ACTIVIDADES_INICIALES } from '../data/datos'
import './AreaPersonal.css'

const DIAS      = ['Lu','Ma','Mi','Ju','Vi','Sa','Do']
const MESES     = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const TIPO_LBL  = { entrega: 'Entrega', examen: 'Examen', clase: 'Clase' }

function useCalendarEvents() {
  return useMemo(() => {
    const map = {}
    EVENTOS.forEach(evt => {
      const k = evt.fecha.slice(0, 10)
      if (!map[k]) map[k] = []
      map[k].push(evt)
    })
    return map
  }, [])
}

export default function AreaPersonal() {
  const { usuario, actualizarFoto } = useAuth()
  const [fotoRef, setFotoRef]       = useState(null)
  const eventsByDate                = useCalendarEvents()
  const completadas                 = ACTIVIDADES_INICIALES.filter(a=>a.estado==='completada').length
  const pendientes                  = ACTIVIDADES_INICIALES.filter(a=>a.estado==='pendiente').length
  const activas                     = ACTIVIDADES_INICIALES.filter(a=>a.estado!=='proximo')
  const pct                         = Math.round((completadas / activas.length) * 100) || 0

  const hoy     = useMemo(() => new Date(), [])
  const [view,  setView]  = useState(() => new Date(hoy.getFullYear(), hoy.getMonth(), 1))
  const [sel,   setSel]   = useState(null)

  const yy        = view.getFullYear()
  const mm        = view.getMonth()
  const diasMes   = new Date(yy, mm + 1, 0).getDate()
  const primerDia = new Date(yy, mm, 1).getDay()
  const offset    = primerDia === 0 ? 6 : primerDia - 1

  function prev() { setView(new Date(yy, mm - 1, 1)); setSel(null) }
  function next() { setView(new Date(yy, mm + 1, 1)); setSel(null) }

  function pad(n) { return String(n).padStart(2, '0') }

  function handleFotoChange(e) {
    const f = e.target.files[0]
    if (f) {
      const reader = new FileReader()
      reader.onload = (evt) => {
        const dataUrl = evt.target.result
        actualizarFoto(dataUrl)
        setFotoRef(f.name)
      }
      reader.readAsDataURL(f)
    }
  }

  const eventosDia = sel
    ? (eventsByDate[`${yy}-${pad(mm+1)}-${pad(sel)}`] || [])
    : []

  const proximos = EVENTOS.filter(e => e.fecha >= `${yy}-${pad(mm+1)}-${pad(1)}`).slice(0, 5)

  function renderDias() {
    const celdas = []
    for (let i = 0; i < offset; i++)
      celdas.push(<div key={`e${i}`} className="cal-dia cal-vacio" />)

    for (let d = 1; d <= diasMes; d++) {
      const fechaStr = `${yy}-${pad(mm+1)}-${pad(d)}`
      const eventos  = eventsByDate[fechaStr]
      const esHoy    = hoy.getFullYear() === yy && hoy.getMonth() === mm && hoy.getDate() === d
      const esSel    = sel === d
      const cls = [
        'cal-dia',
        esHoy && 'cal-hoy',
        esSel && 'cal-sel',
        eventos && 'cal-con-evt',
      ].filter(Boolean).join(' ')

      celdas.push(
        <div key={d} className={cls} onClick={() => setSel(esSel ? null : d)}>
          <span className="cal-num">{d}</span>
          {eventos && (
            <div className="cal-puntos">
              {eventos.map((evt, j) => (
                <span key={j} className={`cal-punto cal-punto-${evt.tipo}`} />
              ))}
            </div>
          )}
        </div>
      )
    }
    return celdas
  }

  return (
    <>
      <Navbar />
      <div className="page-content">
        <div className="ap-grid">
          <div className="ap-main">
            {/* Perfil */}
            <div className="card ap-perfil">
              <h2 className="section-label">Mi Perfil</h2>
              <div className="perfil-row">
                <div className="perfil-foto-blk">
                  <div className="perfil-avatar-grande">
                    {usuario?.foto ? (
                      <img src={usuario.foto} alt="Foto" />
                    ) : (
                      usuario?.nombre.split(' ').slice(0,2).map(p=>p[0]).join('')
                    )}
                  </div>
                  <label className="perfil-foto-label">
                    <input type="file" accept="image/*" onChange={handleFotoChange} style={{display:'none'}} />
                    Cambiar foto
                  </label>
                  {fotoRef && <p style={{fontSize:11,color:'var(--color-text-tertiary)',marginTop:4}}>OK Foto actualizada</p>}
                </div>
                <div className="perfil-info">
                  <div className="perfil-item">
                    <span className="perfil-label">Nombre</span>
                    <span className="perfil-valor">{usuario?.nombre}</span>
                  </div>
                  <div className="perfil-item">
                    <span className="perfil-label">DNI</span>
                    <span className="perfil-valor">{usuario?.dni}</span>
                  </div>
                  <div className="perfil-item">
                    <span className="perfil-label">Email</span>
                    <span className="perfil-valor">{usuario?.email}</span>
                  </div>
                  <div className="perfil-item">
                    <span className="perfil-label">Legajo</span>
                    <span className="perfil-valor">{usuario?.legajo}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progreso */}
            <div className="card ap-progreso">
              <h2 className="section-label">Mi Progreso</h2>
              <div className="progreso-big">
                <div className="prog-circulo" style={{
                  background: `conic-gradient(var(--color-primary) 0deg ${pct*3.6}deg, var(--color-border) ${pct*3.6}deg)`
                }}>
                  <div className="prog-circulo-inner">
                    <span className="prog-pct">{pct}%</span>
                  </div>
                </div>
                <div className="prog-stats">
                  <div className="prog-stat-item">
                    <span className="prog-stat-num green">{completadas}</span>
                    <span className="prog-stat-lbl">completadas</span>
                  </div>
                  <div className="prog-stat-item">
                    <span className="prog-stat-num warn">{pendientes}</span>
                    <span className="prog-stat-lbl">pendientes</span>
                  </div>
                  <div className="prog-stat-item">
                    <span className="prog-stat-num">{activas.length}</span>
                    <span className="prog-stat-lbl">totales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="ap-aside">
            {/* Calendario */}
            <div className="card cal-card">
              <div className="cal-nav">
                <button className="cal-nav-btn" onClick={prev} aria-label="Mes anterior">&lsaquo;</button>
                <h3 className="cal-titulo">{MESES[mm]} <span className="cal-ano">{yy}</span></h3>
                <button className="cal-nav-btn" onClick={next} aria-label="Mes siguiente">&rsaquo;</button>
              </div>

              <div className="cal-parrilla">
                {DIAS.map(d => <div key={d} className="cal-cab-dia">{d}</div>)}
                {renderDias()}
              </div>

              <div className="cal-leyenda">
                <span className="cal-ley-item"><span className="cal-punto cal-punto-entrega" /> Entrega</span>
                <span className="cal-ley-item"><span className="cal-punto cal-punto-examen" /> Examen</span>
                <span className="cal-ley-item"><span className="cal-punto cal-punto-clase" /> Clase</span>
              </div>

              <div className="cal-eventos">
                {sel ? (
                  eventosDia.length > 0 ? (
                    eventosDia.map(evt => (
                      <div key={evt.id} className={`cal-evento cal-${evt.tipo}`}>
                        <span className="cal-evo-tipo">{TIPO_LBL[evt.tipo]}</span>
                        <span className="cal-evo-tit">{evt.titulo}</span>
                      </div>
                    ))
                  ) : (
                    <p className="cal-sin-evt">Sin eventos este día</p>
                  )
                ) : proximos.length > 0 ? (
                  <>
                    <p className="cal-prox-lbl">Próximas fechas</p>
                    <div className="cal-prox-lista">
                      {proximos.map(evt => (
                        <div key={evt.id} className={`cal-evento cal-${evt.tipo}`}>
                          <span className="cal-evo-fecha">{new Date(evt.fecha).toLocaleDateString('es-AR',{day:'numeric',month:'short'})}</span>
                          <span className="cal-evo-tit">{evt.titulo}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : <p className="cal-sin-evt">No hay eventos próximos</p>}
              </div>
            </div>

            {/* Notificaciones */}
            <div className="card" style={{marginTop:14}}>
              <h2 className="section-label">Notificaciones</h2>
              <div className="notif-item notif-info">
                <span className="notif-icon">i</span>
                <span className="notif-texto">Falta 1 semana para el TFI</span>
              </div>
              <div className="notif-item notif-warn">
                <span className="notif-icon">!</span>
                <span className="notif-texto">Tenes 1 actividad pendiente</span>
              </div>
              <div className="notif-item notif-success">
                <span className="notif-icon">OK</span>
                <span className="notif-texto">Completaste el Modulo 2</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
