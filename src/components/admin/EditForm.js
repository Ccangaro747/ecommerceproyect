"use client";

import { useState } from "react";
import Boton from "../Boton";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/config";
import Link from "next/link";

const updateProduct = async (slug, values, file) => {
  let fileURL = values.image;

  if (file) {
    const storageRef = ref(storage, `${slug}/${file.name}`);
    const fileSnapshot = await uploadBytes(storageRef, file);
    fileURL = await getDownloadURL(fileSnapshot.ref);
  }

  const docRef = doc(db, "productos", slug);
  return updateDoc(docRef, {
    title: values.title,
    description: values.description,
    inStock: Number(values.inStock),
    price: Number(values.price),
    type: values.type,
    image: fileURL,
  }).then(() => console.log("Producto actualizado correctamente"));
};

const EditForm = ({ item }) => {
  const { title, description, inStock, price, type, image } = item || {};

  const [values, setValues] = useState({
    title,
    description,
    inStock,
    price,
    type,
    image,
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (item) {
      await updateProduct(item.slug, values, file);
    } else {
      console.error("Item is undefined");
    }
  };

  return (
    <div className="container m-auto mt-6 max-w-lg">
      <form onSubmit={handleSubmit} className="my-12">
        <label>Nombre: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="title"
          onChange={handleChange}
        />
        <label>Imagen: </label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 rounded w-full border border-blue-100 block my-4"
        />

        <label>Precio: </label>
        <input
          type="number"
          value={values.price}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="price"
          onChange={handleChange}
        />

        <label>Stock: </label>
        <input
          type="number"
          value={values.inStock}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="inStock"
          onChange={handleChange}
        />

        <label>Categoria: </label>
        <input
          type="text"
          value={values.type}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="type"
          onChange={handleChange}
        />

        <label>Descripción: </label>
        <textarea
          value={values.description}
          className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
          name="description"
          onChange={handleChange}
        />

        <div className="flex justify-between w-full">
          {/* Enlace para volver */}
          <Link
            href="/admin"
            className="text-black hover:underline cursor-pointer"
          >
            <Boton
              type="button"
              className="bg-black text-white px-4 py-2.5 rounded hover:bg-gray-900 transition"
            >
              Volver
            </Boton>
          </Link>

          <Boton type="submit">Enviar</Boton>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
