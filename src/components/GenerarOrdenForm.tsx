"use client";
import React, { useState, useEffect } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { useAuthContext } from "../../contexts/AuthContext";
import Link from "next/link";

const GenerarOrdenForm = () => {
  const { cart, clearCart } = useCartContext();
  const { user } = useAuthContext();

  // Inicializar el estado del formulario con la información del usuario (si está disponible)
  const [customerInfo, setCustomerInfo] = useState({
    name: user?.name || "",
    email: user?.email || "",
    cardNumber: "",
    // Otros campos según tus necesidades
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcular el total de la compra
    const totalPrice = cart.reduce(
      (acc: number, product: { price: number }) => acc + product.price,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFinishPurchase = () => {
    // Lógica para finalizar la compra
    console.log("Compra finalizada:", { customerInfo, products: cart });

    // Aquí puedes realizar acciones como enviar la información al servidor, actualizar el stock, etc.

    // Limpiar el carrito después de la compra
    clearCart();
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Generar Orden de Compra</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600">
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            value={customerInfo.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={customerInfo.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">
            Número de tarjeta:
          </label>
          <input
            type="text"
            name="cardNumber"
            value={customerInfo.cardNumber}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">
            Total a Pagar:
          </label>
          <p className="text-lg font-bold">${total.toFixed(2)}</p>
        </div>

        {/* Mostrar productos del carrito */}
        <div>
          <label className="block text-sm font-semibold text-gray-600">
            Productos:
          </label>
          <ul>
            {cart.map(
              (product: { id: number; title: string; price: number }) => (
                <li key={product.id}>{`${
                  product.title
                } - $${product.price.toFixed(2)}`}</li>
              )
            )}
          </ul>
        </div>

        {/* Otros campos del formulario según tus necesidades */}

        <div className="flex justify-between">
          {/* Botón Volver en negro */}
          <Link
            href="/productos/all"
            className="bg-black text-white px-5 py-2.5 rounded-md"
          >
            Volver
          </Link>

          {/* Botón Terminar Compra */}
          <button
            type="button"
            onClick={handleFinishPurchase}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Terminar Compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenerarOrdenForm;
