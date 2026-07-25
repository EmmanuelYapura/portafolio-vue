import {
    Link2,
    MapPin,
    Clock3,
    Briefcase
} from "lucide-react";

export default function ContactInfo() {
    return (
        <aside className="contact-info">
            <div className="info-card">
                <h4>Disponible para</h4>
                <div className="badge">
                    <Briefcase size={16} />
                    Backend Java
                </div>
                <div className="badge">
                    <Briefcase size={16} />
                    Backend python
                </div>
                <div className="badge">
                    <Briefcase size={16} />
                    REST APIs
                </div>
                <div className="badge">
                    <Briefcase size={16} />
                    Web Scraping
                </div>
            </div>
            <div className="info-card">
                <div className="info-row">
                    <MapPin size={16} />
                    Argentina
                </div>
                <div className="info-row">
                    <Clock3 size={16} />
                    Respuesta &lt; 48 hs
                </div>
            </div>
        </aside>
    );
}