const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values) {
  const errors = {};

  // ======================
  // Nombre
  // ======================

  if (!values.name.trim()) {
    errors.name = "Ingresa tu nombre.";
  } else if (values.name.trim().length < 3) {
    errors.name = "Debe tener al menos 3 caracteres.";
  }

  // ======================
  // Email
  // ======================

  if (!values.email.trim()) {
    errors.email = "Ingresa un correo electrónico.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Correo electrónico inválido.";
  }

  // ======================
  // Mensaje
  // ======================

  if (!values.message.trim()) {
    errors.message = "Escribe un mensaje.";
  } else if (values.message.trim().length < 15) {
    errors.message =
      "El mensaje debe tener al menos 15 caracteres.";
  }

  return errors;
}