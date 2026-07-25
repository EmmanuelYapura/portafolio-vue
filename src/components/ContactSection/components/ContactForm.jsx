import { Send } from "lucide-react";
import { useContactForm } from "../../../hooks/useContactForm";
import ContactInput from "./ContactInput";

export default function ContactForm() {
  const {
    formData,
    errors,
    loading,
    successMessage,
    serverError,
    handleChange,
    handleBlur,
    handleSubmit
  } = useContactForm();

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <ContactInput
        id="name"
        label="Nombre"
        name="name"
        value={formData.name}
        error={errors.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Tu nombre"
      />
      <ContactInput
        id="email"
        label="Correo electrónico"
        type="email"
        name="email"
        value={formData.email}
        error={errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="correo@email.com"
      />
      <ContactInput
        textarea
        id="message"
        label="Mensaje"
        name="message"
        rows={7}
        value={formData.message}
        error={errors.message}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Cuéntame sobre tu proyecto..."
      />
      <button
        className="btn btn-primary self-start"
        disabled={loading}
      >
        {
          loading
            ? "Enviando..."
            : <>
              <Send size={17} />
              Enviar mensaje
            </>
        }
      </button>
      {
        successMessage && (
          <div className="success-message fade-in">
            {successMessage}
          </div>
        )
      }
      {
        serverError && (
          <div className="server-error fade-in">
            {serverError}
          </div>
        )
      }
    </form>
  );
}