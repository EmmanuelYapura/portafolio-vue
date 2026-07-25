import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, GitBranch } from "lucide-react"
import { projects } from "../../data/portfolioData"
import './ProjectsCarousel.css'

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0)
  const project = projects[current]

  const go = (dir) => {
    setCurrent((c) => (c + dir + projects.length) % projects.length)
  }

  return (
    <div className="carousel">
      <div className="carousel-top">
        <span className="mono muted small">
          Proyecto {current + 1} / {projects.length}
        </span>
        <div className="carousel-nav">
          <button type="button" onClick={() => go(-1)} aria-label="Proyecto anterior" className="round-btn">
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Proyecto siguiente" className="round-btn">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="carousel-body">
        <div className="carousel-image">
          <img
            key={project.image}
            src={project.image || "/placeholder.svg"}
            alt={`Captura del proyecto ${project.title}`}
          />
        </div>

        <div className="carousel-info">
          <h3>{project.title}</h3>
          <p className="soft">{project.description}</p>

          <div className="carousel-actions">
            {
              project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <ExternalLink size={16} />
                  Demo
                </a>
              )
            }
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-outline">
              <GitBranch size={16} />
              Repositorio
            </a>
          </div>
        </div>
      </div>

      <div className="grid">
        <div>
          <h4>
            Caracteristicas
          </h4>
          <ul className="tags">
            {project.features.map(feature => (
              <li key={feature} className="tag">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Herramientas</h4>
          <ul className="tags">
            {project.stack.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="carousel-dots">
        {projects.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Ir al proyecto ${i + 1}`}
            className={`dot${i === current ? " dot-active" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}
