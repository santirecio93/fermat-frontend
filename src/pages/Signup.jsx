import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log(data);

      alert("Usuario creado correctamente");

      setForm({
        nombre: "",
        email: "",
        password: "",
      });

    } catch (error) {
      console.error(error);
      alert("Error al registrarse");
    }
  };

  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    }}>
      <form onSubmit={handleSubmit} style={{
        background: "rgba(0,0,0,0.7)",
        padding: "30px",
        borderRadius: "10px",
        width: "350px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}>
        <h2>Crear cuenta</h2>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Signup;