import { mockData } from "@/data/product";
const Detail = ({ params }) => {
  const { id } = params;

  const producto = mockData.find((item) => item.slug === id);

  if (!producto) {
    return (
      <div className="container m-auto pt-8">
        <h2 className="text-4xl font-bold">Producto no encontrado</h2>
        <hr />
      </div>
    );
  }

  const { title, description, price } = producto;

  return (
    <div className="container m-auto pt-8">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-lg">{description}</p>
      <p className="text-xl font-bold mt-4">${price}</p>
      <hr />
    </div>
  );
};

export default Detail;
