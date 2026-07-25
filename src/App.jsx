import { useState } from "react"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Folder } from "lucide-react"
import { sections } from "./data/portfolioData.js"
import { InicioSection } from "./components/HomeSection/HomeSection.jsx"
import { ProyectosSection } from "./components/ProjectsSection/ProjectsSection.jsx"
import { EstudiosSection } from "./components/EducationSection/EducationSection.jsx"
import { SobreMiSection } from "./components/AboutSection/AboutSection.jsx"
import { ContactoSection } from "./components/ContactSection/ContactSection.jsx"


export default function App() {
  const [active, setActive] = useState("inicio")
  const content = {
    inicio: <InicioSection setActive={setActive} />,
    proyectos: <ProyectosSection />,
    estudios: <EstudiosSection />,
    "sobre-mi": <SobreMiSection />,
    contacto: <ContactoSection />,
  }

  return (
    <main className="page">
      <div className="folder-wrap">
        <div className="desk-label">
          <span className="mono upper muted">
            <Folder size={16} className="accent-icon" />
            Portfolio
          </span>
        </div>

        <div className="folder">
          <div role="tablist" aria-label="Secciones del portafolio" className="tabs">
            {sections.map((section) => {
              const isActive = active === section.id
              return (
                <button
                  key={section.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${section.id}`}
                  id={`tab-${section.id}`}
                  onClick={() => setActive(section.id)}
                  className={`tab${isActive ? " tab-active" : ""}`}
                >
                  {section.label}
                </button>
              )
            })}
          </div>

          <div className="folder-body">
            <div
              key={active}
              role="tabpanel"
              id={`panel-${active}`}
              aria-labelledby={`tab-${active}`}
              className="paper"
            >
              {content[active]}
            </div>
            <footer className="site-footer">
              <div className="footer-container">
                <div className="footer-copyright">
                  EMMANUEL YAPURA
                </div>
                <div className="footer-icons">
                  <a
                    href="https://github.com/EmmanuelYapura"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="icon" size={24} />

                  </a>
                  <a
                    href="https://linkedin.com/in/emmanuelyapura"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="icon" size={24} />

                  </a>
                  <a href="https://wa.me/541136612868"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaWhatsapp className="icon" size={24} />

                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}
