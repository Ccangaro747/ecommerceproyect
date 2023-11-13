"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Página no encontrada</h1>
      <p className="text-lg mb-8">La página que estás buscando no existe.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Volver a la página de inicio
      </Link>
    </div>
  );
};

export default NotFound;
