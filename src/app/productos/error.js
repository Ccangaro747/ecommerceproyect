"use client"
import Boton from '../../components/Boton';

const Error = ({ error, reset }) => {
  console.log(error);

  return (
    <div className="container mx-auto mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Hubo un error al cargar la página</h2>
      <p className="text-red-500">{error.message}</p>
      <Boton onClick={reset} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Intentar nuevamente
      </Boton>
    </div>
  );
};

export default Error;

