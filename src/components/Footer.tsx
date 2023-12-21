"use client";
import React from "react";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

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
      <div className="flex items-center flex-col">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => window.open("https://twitter.com/", "_blank")}
            className="text-blue-500 hover:text-blue-700 text-lg"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button
            onClick={() => window.open("https://instagram.com/", "_blank")}
            className="text-pink-500 hover:text-pink-700 text-lg"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button
            onClick={() => window.open("https://facebook.com/", "_blank")}
            className="text-blue-700 hover:text-blue-900 text-lg"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
