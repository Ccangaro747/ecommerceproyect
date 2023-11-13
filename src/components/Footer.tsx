import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-bodyColor mt-8 py-4">
      <Container className="flex flex-col md:flex-row items-center gap-y-2 md:gap-x-5 justify-center text-center">
        <div className="text-black text-sm">
          © 2023 Rufina Indumentaria | Todos los derechos reservados
          <br />
          Dirección: Calle 25 123, Ciudad Mercedes
          <br />
          Teléfono: +123 456 7890
        </div>
      </Container>
    </div>
  );
};

export default Footer;
