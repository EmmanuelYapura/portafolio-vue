import { GraduationCap, Sparkles } from "lucide-react"
import { SectionHeading } from '../Sections.jsx'
import StudiesCarousel from "./EducationCarousel.jsx"
import { skills } from "../../data/portfolioData.js"
import './EducationSection.css'



export function EstudiosSection() {
  return (
    <div>
      <SectionHeading title="Estudios y Habilidades" />
      <div className="estudios-grid">
        <div>
          <h3 className="subhead">
            <GraduationCap size={16} className="accent-icon" />
            Cursos y estudios
          </h3>
          <StudiesCarousel />
        </div>
        <div className="skill-div">
          <h3 className="subhead">
            <Sparkles size={16} className="accent-icon" />
            Habilidades y tecnologías
          </h3>
          <div className="skill-groups">
            {skills.map((group) => (
              <div key={group.group} className="skill-group">
                <p className="skill-group-name">{group.group}</p>
                <ul className="tags">
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}