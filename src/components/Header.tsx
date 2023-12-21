"use client";
import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Container from "./Container";
import Logo from "./Logo";
import { IoMdCart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useCartContext } from "../../contexts/CartContext";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { cart, calculateTotal, addToCart, removeFromCart, isInCart } =
    useCartContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Configuración de Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyBNb6LMR_Yxix4gLdPsFJha-t4NjtuxFDQ",
      authDomain: "cc747-40462.firebaseapp.com",
      projectId: "cc747-40462",
      storageBucket: "cc747-40462.appspot.com",
      messagingSenderId: "471597257898",
      appId: "1:471597257898:web:d3aae064404c100aa96cd3",
    };

    // Inicializar Firebase
    const app = initializeApp(firebaseConfig);

    // Conexión a la base de datos de Firebase
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");

    // Consulta de productos filtrados por término de búsqueda
    const q = query(productosCollection, where("title", ">=", ""));

    // Actualiza el estado de los productos cuando hay cambios en la base de datos
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    });

    // Limpia el listener cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  // Filtra los productos basados en el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="bg-bodyColor h-20">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Campo de búsqueda */}
        <div className="md:w-full relative">
          <div className="bg-white flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group relative">
            <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
            <input
              type="text"
              placeholder="Buscar productos"
              className="placeholder:text-sm flex-1 outline-none"
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button
                className="ml-2 cursor-pointer"
                onClick={() => {
                  setSearchTerm("");
                }}
              >
                &#x2715;
              </button>
            )}
          </div>

          {searchTerm && filteredProducts.length > 0 && (
            <div className="absolute top-full z-10 left-0 right-0 bg-white border rounded-md mt-1 overflow-hidden">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={40}
                    height={40}
                    className="object-cover rounded-md mr-2"
                  />
                  <div>
                    <p>{product.title}</p>
                    {isInCart(product) ? (
                      <button onClick={() => removeFromCart(product)}>
                        Remove from Cart
                      </button>
                    ) : (
                      <button onClick={() => addToCart(product)}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Login/Register - Solo visible en dispositivos mayores a 'md' */}
        <div className="hidden md:flex items-center gap-x-1 headerDiv">
          <AiOutlineUser className="text-2xl" />
          <p className="text-sm font-semibold">Login/Register</p>
        </div>

        {/* Botón del carrito - Solo visible en dispositivos mayores a 'md' */}
        <div className="hidden md:flex bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
          <Link href="/carrito" className="flex items-center justify-center">
            <IoMdCart className="text-xl" />
            <p className="text-sm font-semibold">{calculateTotal()}</p>
            <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black ">
              {cart.length}
            </span>
          </Link>
        </div>

        {/* Menú desplegable */}
        <Menu />
      </Container>
    </div>
  );
};

export default Header;
