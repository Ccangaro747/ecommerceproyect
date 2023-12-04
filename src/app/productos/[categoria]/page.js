import React from "react";
import CustomSuspense from "../../../components/CustomSuspense";
import ProductList from "../../../components/products/ProductList";

const Productos = ({ params }) => {
  const { categoria } = params;

  return (
    <div className="container m-auto pt-8">
      <h2 className="text-4xl font-bold">Productos</h2>
      <hr />
      <CustomSuspense>
        <ProductList categoria={categoria} />
      </CustomSuspense>
    </div>
  );
};

export default Productos;



