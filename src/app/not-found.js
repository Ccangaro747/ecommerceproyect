"use client"

import Boton from '@/components/NotFound';

const NotFound = () => {
  return (
    <div>
      <hr />
      <Boton onClick={() => window.history.back()}>Volver</Boton>
    </div>
  );
};

export default NotFound;




