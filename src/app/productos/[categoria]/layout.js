import Link from "next/link";

const ProductosLayout = ({ children }) => {
  return (
    <div className="container m-auto">
      <nav className="flex space-x-4 mb-4 py-3">
        <Link className="text-black hover:text-gray-700 text-lg" href={"/productos/all"}>
          Todos
        </Link>
        <Link className="text-black hover:text-gray-700 text-lg" href={"/productos/ropa"}>
          Indumentaria
        </Link>
        <Link className="text-black hover:text-gray-700 text-lg" href={"/productos/joyeria"}>
          Bijouterie
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default ProductosLayout;

