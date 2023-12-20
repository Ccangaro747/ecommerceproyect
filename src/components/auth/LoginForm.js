"use client"
import { useState } from "react";
import Boton from "../Boton";
import { useAuthContext } from "@/contexts/AuthContext";

const LoginForm = () => {
  const { createUser, loginUser } = useAuthContext();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Realiza acciones adicionales si es necesario antes de enviar el formulario
  };

  return (
    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-8 px-6 rounded-xl max-w-md w-full shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <input
          type="email"
          value={values.email}
          required
          placeholder="Tu email"
          className="p-3 rounded w-full border border-blue-200 mb-4"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={values.password}
          required
          placeholder="Tu password"
          className="p-3 rounded w-full border border-blue-200 mb-4"
          name="password"
          onChange={handleChange}
        />
        <div className="flex flex-col md:flex-row items-center">
          <Boton onClick={() => loginUser(values)} className="w-full md:w-1/2 mb-2 md:mb-0 mr-2">
            Ingresar
          </Boton>
          <Boton onClick={() => createUser(values)} className="w-full md:w-1/2 ml-2">
            Registrarme
          </Boton>
        </div>
        <Boton onClick={null} className="mt-4 w-full">
          Ingresar con Google
        </Boton>
      </form>
    </div>
  );
};

export default LoginForm;



