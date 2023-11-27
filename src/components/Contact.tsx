"use client";
import { useState } from "react";
import Container from "./Container";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Agregar lógica

    console.log("Datos del formulario:", formData);
  };

  return (
    <Container className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-8 bg-white rounded shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-gray"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-gray"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-gray resize-none"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black hover:bg-slate-950 text-white font-bold py-2 px-4 rounded"
        >
          Enviar Mensaje
        </button>
      </form>
    </Container>
  );
};

export default ContactForm;
