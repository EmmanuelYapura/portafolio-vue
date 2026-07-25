import { SectionHeading } from "../Sections";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import "./ContactSection.css";

export function ContactoSection() {
    return (
        <section>
            <SectionHeading title="Contacto" />
            <div className="contact-content">
                <div className="contact-header">
                    <h3>¿Trabajamos juntos?</h3>
                    <p>
                        Actualmente estoy buscando oportunidades como
                        desarrollador Backend Java.
                        Si crees que puedo aportar a tu equipo,
                        estaré encantado de conversar.
                    </p>
                    <ContactForm />
                </div>
                <div>
                    <ContactInfo />
                </div>
            </div>
        </section>
    );
}