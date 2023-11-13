"use client"
import React, { useState } from "react";
import { mockData } from "../../../data/product";

const AdminPage = () => {
  const [filteredData, setFilteredData] = useState(mockData);
  const [filterPrice, setFilterPrice] = useState("");

  const handleEdit = (slug) => {
    // Editar el producto con el slug dado
    console.log(`Editar producto con Slug ${slug}`);
  };

  const handleDelete = (slug) => {
    // Eliminar el producto con el slug dado
    console.log(`Eliminar producto con Slug ${slug}`);
  };

  const handleFilter = () => {
    // Filtrar por precio
    const filteredResults = mockData.filter((product) => product.price < filterPrice);
    setFilteredData(filteredResults);
  };

  const resetFilter = () => {
    // Restablecer los datos filtrados
    setFilteredData(mockData);
    setFilterPrice("");
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Gestionar Productos</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Filtrar por Precio:</label>
        <input
          type="number"
          placeholder="Ingrese un precio"
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleFilter}
          className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md"
        >
          Filtrar
        </button>
        <button
          onClick={resetFilter}
          className="ml-2 bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
        >
          Restablecer
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">NOMBRE</th>
              <th className="border border-gray-300 px-4 py-2">PRECIO</th>
              <th className="border border-gray-300 px-4 py-2">STOCK</th>
              <th className="border border-gray-300 px-4 py-2">TIPO</th>
              <th className="border border-gray-300 px-4 py-2">IMAGEN</th>
              <th className="border border-gray-300 px-4 py-2">SLUG</th>
              <th className="border border-gray-300 px-4 py-2">DESCRIPCION</th>
              <th className="border border-gray-300 px-4 py-2">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((product) => (
              <tr key={product.slug}>
                <td className="border border-gray-300 px-4 py-2">{product.title}</td>
                <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                <td className="border border-gray-300 px-4 py-2">{product.inStock}</td>
                <td className="border border-gray-300 px-4 py-2">{product.type}</td>
                <td className="border border-gray-300 px-4 py-2">{product.image}</td>
                <td className="border border-gray-300 px-4 py-2">{product.slug}</td>
                <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 mr-2 rounded-md"
                    onClick={() => handleEdit(product.slug)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                    onClick={() => handleDelete(product.slug)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;

