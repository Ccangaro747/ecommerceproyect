"use client"

import React from "react";
import { useCartContext } from "@/contexts/CartContext";
import Boton from "@/components/Boton";
import Link from "next/link";
import Image from "next/image";

const ProductDetail = ({ item }) => {
  const { addToCart, removeFromCart, isInCart } = useCartContext();

  if (!item) {
    return <p>No se encontró el producto</p>;
  }

  const { title, description, price, image } = item;

  return (
    <div className="flex flex-col items-center p-4 shadow-md">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="rounded-md overflow-hidden">
        <Image 
          alt={item.title}
          src={item.image}
          width={150}
          height={150}
        />
      </div>
      <p className="text-2xl font-semibold mb-2">${price.toFixed(2)}</p>
      <div className="flex gap-4">
        <Link
          href="/productos/all"
          className="bg-black text-white hover:bg-gray-800 py-2 px-4 rounded-md transition duration-300"
        >
          Volver
        </Link>
        {isInCart(item) ? (
          <Boton
            onClick={() => removeFromCart(item)}
            className="bg-red-500 text-white hover:bg-red-700 py-2 px-4 rounded-md transition duration-300"
          >
            Sacar del carrito
          </Boton>
        ) : (
          <Boton
            onClick={() => addToCart(item)}
            className="bg-black text-white hover:bg-gray-800 py-2 px-4 rounded-md transition duration-300"
          >
            Agregar al carrito
          </Boton>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;


