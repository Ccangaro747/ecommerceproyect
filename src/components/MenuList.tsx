"use client";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

interface MenuListProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuList: React.FC<MenuListProps> = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <div
      className={`${
        open ? "visible opacity-100" : "invisible opacity-0"
      } transition-all fixed inset-0 bg-black/50 flex justify-end items-start`}
    >
      <aside
        className={`transform ${
          !open ? "-translate-x-48" : "translate-x-0"
        } transition-transform w-48 bg-white rounded-lg shadow-lg overflow-hidden mt-8`}
      >
        <div
          className="text-gray-500 text-right p-4 text-lg cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleClose}
        >
          ×
        </div>

        {/* Botón Login/Register - Visible solo en dispositivos móviles */}
        <div
          className="md:hidden flex items-center gap-x-1 p-4 hover:bg-gray-100 transition-colors"
          onClick={handleClose}
        >
          <AiOutlineUser className="text-2xl" />
          <p className="text-sm font-semibold">Login/Register</p>
        </div>

        {/* Botón Carrito de Compras - Visible solo en dispositivos móviles */}
        <div
          className="md:hidden flex items-center gap-x-1 p-4 hover:bg-gray-100 transition-colors"
          onClick={handleClose}
        >
          <Link
            href="/carrito"
            className="md:hidden flex items-center gap-x-1 p-4 hover:bg-gray-100 transition-colors"
            onClick={handleClose}
          >
            <IoMdCart className="text-xl" />
            <p className="text-sm font-semibold">$0.00</p>
            <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black ">
              0
            </span>
          </Link>
        </div>

        <nav className="flex flex-col gap-5 px-4 text-gray-800">
          {/* Nuevo enlace a la sección "Nosotros" solo visible en dispositivos móviles */}
          <Link
            className="hover:text-gray-500 text-lg"
            onClick={handleClose}
            href={"/"}
          >
            Inicio
          </Link>
          <Link
            className="hover:text-gray-500 text-lg"
            onClick={handleClose}
            href={"/productos/all"}
          >
            Productos
          </Link>
          <Link
            className="hover:text-gray-500 text-lg"
            onClick={handleClose}
            href={"/nosotros"}
          >
            Nosotros
          </Link>
          <Link
            className="hover:text-gray-500 text-lg mb-4"
            onClick={handleClose}
            href={"/contacto"}
          >
            Contacto
          </Link>
          <Link
            className="hover:text-gray-500 text-lg mb-4"
            onClick={handleClose}
            href={"/admin"}
          >
            Panel de administracion
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default MenuList;
