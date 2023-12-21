"use client"
import React from "react";
import { useCartContext } from "../../contexts/CartContext";
import Image from "next/image";
import Link from "next/link";

const Carrito: React.FC = () => {
  const { cart, removeFromCart } = useCartContext();

  return (
    <div className="flex flex-col justify-start items-center min-h-screen mt-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            <ul className="list-none p-0">
              {cart.map((product) => (
                <li key={product.id} className="flex items-center py-4 border-b border-gray-300">
                  <div className="w-20 h-20 mr-4">
                    <Image
                      src={product.image || productImage}
                      alt={product.title}
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p className="text-lg mb-1">{product.title}</p>
                    <p className="text-sm text-gray-700">${product.price.toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(product)}
                      className="text-sm text-white bg-red-500 px-3 py-1 rounded-md mt-2 mr-2 inline-block"
                    >
                      Quitar del Carrito
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center">
              <Link href="/productos/all" className="bg-black text-white px-5 py-2.5 rounded-md ml-4">
                Volver
              </Link>
              <Link href="/carrito/generarorden" className="bg-green-500 text-white px-4 py-2 rounded-md ml-4">
                Comprar
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
