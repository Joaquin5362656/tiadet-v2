import { useState } from 'react'
import Navbar from '../components/Navbar'
import { TFI_ENUNCIADO } from '../data/datos'
import './TFI.css'

export default function TFI() {
  const [archivo, setArchivo]  = useState(null)
  const [link, setLink]        = useState('')
  const [enviado, setEnviado]  = useState(false)
  const tfi                    = TFI_ENUNCIADO

  function handleEnvio() {
    if (!link && !archivo) return
    setEnviado(true)
  }

  return (
    <>
      <Navbar />
      <div className="page-content">
        <div className="tfi-grid">
          <div className="tfi-main">
            <div className="card tfi-enunciado-card">
              <div className="tfi-header">
                <h1 className="tfi-titulo">{tfi.titulo}</h1>
                <p className="tfi-subtitulo">{tfi.subtitulo}</p>
                <div className="tfi-fecha-badge">
                  <span className="badge badge-warning">Entrega: {tfi.fecha_entrega}</span>
                </div>
              </div>

              <hr className="divider" />

              <h2 className="section-label">Descripcion</h2>
              {tfi.descripcion.split('\n\n').map((p,i)=>(
                <p key={i} className="tfi-p">{p}</p>
              ))}

              <hr className="divider" />

              <h2 className="section-label">Requisitos del trabajo</h2>
              <ul className="tfi-requisitos">
                {tfi.requisitos.map((r,i)=>(
                  <li key={i} className="tfi-req-item">
                    <span className="tfi-req-num">{String(i+1).padStart(2,'0')}</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <hr className="divider" />

              <h2 className="section-label">Criterios de evaluacion</h2>
              <div className="tfi-criterios">
                {tfi.criterios.map((c,i)=>(
                  <div key={i} className="tfi-criterio-row">
                    <span className="tfi-crit-nombre">{c.criterio}</span>
                    <span className="badge badge-primary">{c.peso}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="tfi-aside">
            <div className="card">
              <h2 className="section-label">Entrega del TFI</h2>
              {enviado ? (
                <div className="tfi-enviado">
                  <span className="tfi-enviado-icon">OK</span>
                  <p className="tfi-enviado-txt">Tu TFI fue enviado correctamente.</p>
                  <p style={{fontSize:12,color:'var(--color-text-tertiary)',marginTop:6}}>La docente recibira una notificacion.</p>
                  <button className="btn-secondary" style={{marginTop:12,width:'100%',fontSize:13}} onClick={()=>setEnviado(false)}>
                    Reemplazar entrega
                  </button>
                </div>
              ) : (
                <>
                  <label style={{fontSize:12,fontWeight:600,color:'var(--color-text-secondary)',display:'block',marginBottom:6}}>Link (Google Drive, GitHub, etc.)</label>
                  <input type="url" placeholder="https://drive.google.com/..." value={link} onChange={e=>setLink(e.target.value)} />

                  <label style={{fontSize:12,fontWeight:600,color:'var(--color-text-secondary)',display:'block',margin:'14px 0 6px'}}>Subir archivo (PDF, ZIP...)</label>
                  <label className="file-upload-area">
                    <input type="file" style={{display:'none'}} accept=".pdf,.doc,.docx,.zip" onChange={e=>setArchivo(e.target.files[0])} />
                    {archivo
                      ? <span className="file-chosen">Archivo: {archivo.name}</span>
                      : <span className="file-placeholder">Selecciona un archivo</span>
                    }
                  </label>

                  <button
                    className="btn-primary"
                    style={{marginTop:16,width:'100%'}}
                    disabled={!link && !archivo}
                    onClick={handleEnvio}
                  >
                    Enviar TFI
                  </button>

                  {!link && !archivo && (
                    <p style={{fontSize:12,color:'var(--color-text-tertiary)',marginTop:8,textAlign:'center'}}>
                      Adjunta un link o un archivo para enviar.
                    </p>
                  )}
                </>
              )}
            </div>

            <div className="card" style={{marginTop:14}}>
              <h2 className="section-label">Recursos de apoyo</h2>
              <a href="#" className="tfi-recurso-link">Guia y rubrica del TFI</a>
              <a href="#" className="tfi-recurso-link">Plantilla de programa de curso</a>
              <a href="#" className="tfi-recurso-link">Ejemplos de TFI de ediciones anteriores</a>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
