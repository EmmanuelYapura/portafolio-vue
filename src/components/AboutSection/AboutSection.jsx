import { SectionHeading } from '../Sections.jsx'
import './AboutSection.css'

export function SobreMiSection() {
  return (
    <div>
      <SectionHeading title="Sobre mí" />
      <div className="aboutme">
        <div className="prose">
          <p>
            Empecé con el desarrollo web aprendiendo HTML, CSS y JavaScript, y luego profundicé en herramientas como
            FastAPI y Selenium. Actualmente curso la carrera de Lic. en Análisis de Sistemas, y busco integrarme a un
            equipo donde pueda crecer profesionalmente y seguir aprendiendo de forma constante.
          </p>
          <div className="avatar-content">
          <img src="/img-aboutme2.jpg" className="avatar" alt="img-aboutme2"/>

          </div>
        </div>
        <div className="prose">
          <div className="avatar-content">
          <img src="/img-aboutme.png" className="avatar" alt="img-aboutme"/>

          </div>
          <p>
            Soy desarrollador enfocado en backend y automatización, con experiencia en Python, desarrollo de APIs y
            técnicas de web scraping. Disfruto crear soluciones que automatizan tareas y conectan servicios de forma
            eficiente.
          </p>
        </div>
      </div>
    </div>
  )
}