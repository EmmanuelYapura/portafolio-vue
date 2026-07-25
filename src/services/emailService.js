import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * @param {{name:string,email:string,message:string}} formData
 */

export async function sendContactEmail(formData) {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    );

    return {
      success: true,
      response,
    };
  } catch (error) {
    console.error("Error enviando email:", error);

    return {
      success: false,
      error,
    };
  }
}