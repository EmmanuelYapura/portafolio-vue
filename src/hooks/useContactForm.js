import { useState } from "react";

import { sendContactEmail } from "../services/emailService";
import { validateContactForm } from "../utils/validators";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [serverError, setServerError] = useState("");

  //--------------------------------------------

  const clearMessages = () => {
    setSuccessMessage("");
    setServerError("");
  };

  //--------------------------------------------

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    clearMessages();
  };

  //--------------------------------------------

  const handleBlur = ({ target }) => {
    const validation = validateContactForm(formData);

    setErrors((prev) => ({
      ...prev,
      [target.name]: validation[target.name],
    }));
  };

  //--------------------------------------------

  const resetForm = () => {
    setFormData(INITIAL_STATE);
    setErrors({});
  };

  //--------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    clearMessages();

    const validation = validateContactForm(formData);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setLoading(true);

    const result = await sendContactEmail(formData);

    setLoading(false);

    if (!result.success) {
      setServerError(
        "Ocurrió un error al enviar el mensaje."
      );

      return;
    }

    setSuccessMessage(
      "¡Gracias! Tu mensaje fue enviado correctamente."
    );

    resetForm();
  };

  //--------------------------------------------

  return {
    formData,

    errors,

    loading,

    successMessage,

    serverError,

    handleChange,

    handleBlur,

    handleSubmit,
  };
}