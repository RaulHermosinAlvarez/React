import { useState } from "react";

export default function ContactPage({ goToLanding }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="container">
      <h1>Contacta conmigo</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "20px auto" }}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Mensaje:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required />

        <button type="submit" style={{ marginTop: "10px" }}>Enviar</button>
      </form>

      <button onClick={goToLanding} style={{ marginTop: "20px" }}>Volver a inicio</button>
    </main>
  );
}

