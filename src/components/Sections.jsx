import { GraduationCap, Mail, MapPin, Sparkles } from "lucide-react"
import { contact, skills } from "../data/portfolioData.js"

export function SectionHeading({ title }) {
  return (
    <div className="section-heading">
      <span aria-hidden className="heading-bar" />
      <h2>{title}</h2>
    </div>
  )
}
