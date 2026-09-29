import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

// Maneja el estado de un formulario que se envía por POST al backend
export default function useFormSubmit(endpoint, initialValues) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submit = async (e, { successMessage, errorMessage }) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus({ state: "error", message: data.message || errorMessage });
        return;
      }

      setStatus({ state: "success", message: successMessage });
      setValues(initialValues);
    } catch (error) {
      console.error(error);
      setStatus({ state: "error", message: errorMessage });
    }
  };

  return { values, status, handleChange, submit };
}
