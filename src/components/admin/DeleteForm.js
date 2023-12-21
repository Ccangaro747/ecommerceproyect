"use client"
// "use client";
import { useState } from "react";
import Boton from "../Boton";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "@/firebase/config";
import Link from "next/link";

const deleteProduct = async (slug, imageFileName) => {
  // Eliminar el documento de la base de datos
  const docRef = doc(db, "productos", slug);
  await deleteDoc(docRef);

  // Eliminar la imagen almacenada en Firebase Storage
  const storageRef = ref(storage, `${slug}/${imageFileName}`);
  await deleteObject(storageRef);

  console.log("Producto eliminado correctamente");
};

const DeleteForm = ({ item }) => {
  const { slug, image, title } = item || {};
  const [confirmation, setConfirmation] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(true);

  const handleDelete = async () => {
    if (confirmation.toLowerCase() === "eliminar") {
      await deleteProduct(slug, image);
      setShowConfirmation(false); // Oculta el formulario después de eliminar el producto
    } else {
      console.log("Confirmación incorrecta");
    }
  };

  return (
    <div className="container m-auto mt-6 max-w-lg">
      {showConfirmation && (
        <form className="flex flex-col items-start">
          <p>
            ¿Estás seguro que deseas eliminar el producto "{title}"?
          </p>

          <label>Para confirmar, escribe "eliminar": </label>
          <input
            type="text"
            value={confirmation}
            required
            className="p-2 rounded w-full border border-blue-100 block my-4"
            onChange={(e) => setConfirmation(e.target.value)}
          />

          <div className="flex justify-between w-full">
            {/* Enlace para volver */}
            <Link href="/admin"className="text-black hover:underline cursor-pointer">
                <Boton type="button" className="bg-black text-white px-4 py-2.5 rounded hover:bg-gray-900 transition">
                  Volver
                </Boton>

            </Link>

            <Boton type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2.5 rounded hover:bg-red-600 transition">
              Eliminar Producto
            </Boton>
          </div>
        </form>
      )}

      {!showConfirmation && (
        <p>Producto eliminado correctamente. <Link href="/admin"className="text-black hover:underline cursor-pointer">
          <Boton type="button" className="bg-black text-white px-4 py-2.5 rounded hover:bg-gray-900 transition">
            Volver
          </Boton>
        </Link></p>
      )}
    </div>
  );
};

export default DeleteForm;







