import { Sparkles } from "lucide-react"
import { SectionHeading } from '../Sections.jsx'
import './HomeSection.css'

export function InicioSection({ setActive }) {
  return (
    <div>
      <SectionHeading title="Inicio" />
      <div className="inicio-grid">
        <div className="inicio-text">
          <p className="mono kicker">Hola, soy</p>
          <h1 className="inicio-name">Emmanuel Yapura</h1>
          <p className="lead">
            Estudiante de Tecnicatura en Sistemas con pasión por el desarrollo backend y la programación.
            <br />
            Busco
            oportunidades para aplicar mis conocimientos y crecer profesionalmente.
          </p>
          <div className="chips">
            <span className="chip">
              <Sparkles size={14} className="accent-icon" />
              Backend Developer
            </span>
          </div>
          <div className="chips">
            <button className="btn btn-primary">
              <a href="/cv_emmanuel_y.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-cv">
                Descargar cv
              </a>
            </button>
            <button onClick={() => setActive("contacto")} className="btn btn-outline">Contactame</button>
          </div>
        </div>
        <div className="portfolio-card-container">
          <div className="instax-frame">
            <div className="image-wrapper">
              <img className="profile-image" alt="Emmanuel Yapura" src="/profile.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}