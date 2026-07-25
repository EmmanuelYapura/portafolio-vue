import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { studies } from "../../data/portfolioData"

const PER_PAGE = 3
const pageCount = Math.ceil(studies.length / PER_PAGE)

export default function StudiesCarousel() {
  const [page, setPage] = useState(0)

  const go = (dir) => {
    setPage((p) => (p + dir + pageCount) % pageCount)
  }

  const start = page * PER_PAGE
  const visible = studies.slice(start, start + PER_PAGE)

  return (
    <div className="studies-carousel">
      <div className="carousel-top">
        <span className="mono muted small">
          Página {page + 1} / {pageCount}
        </span>
        <div className="carousel-nav">
          <button type="button" onClick={() => go(-1)} aria-label="Estudios anteriores" className="round-btn">
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Estudios siguientes" className="round-btn">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <ul key={page} className="study-list">
        {visible.map((s) => (
          <li key={s.title + s.place} className="study-item">
            <div>
              <p className="study-title">{s.title}</p>
              <p className="muted small">{s.place}</p>
            </div>
            <span className="status">{s.status}</span>
          </li>
        ))}
      </ul>

      <div className="carousel-dots">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setPage(i)}
            aria-label={`Ir a la página ${i + 1}`}
            className={`dot${i === page ? " dot-active" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}
