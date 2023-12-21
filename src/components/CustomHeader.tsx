import Link from "next/link";
import styles from "./CustomHeader.module.css";

const CustomHeader = () => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center md:gap-x-5 justify-between md:justify-start max-w-screen-xl mx-auto px-4 xl:px-0 py-10">
      <div className={`text-center md:text-left ${styles.container}`}>
        <h1 className="text-4xl font-bold mb-4">Rufina Indumentaria</h1>
        <p className="text-lg mb-4">
          Explora tu estilo único con Rufina Indumentaria y refleja autenticidad
          y elegancia en cada elección.
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <Link href="/productos/all">
            <div
              className={`bg-black hover:bg-slate-950 text-white font-bold py-2 px-4 rounded cursor-pointer ${styles.button}`}
            >
              Ver productos
            </div>
          </Link>
          <span className={styles.arrow}>&#8592;</span>
        </div>
      </div>
    </main>
  );
};

export default CustomHeader;
