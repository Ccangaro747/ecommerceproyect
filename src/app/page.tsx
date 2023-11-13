import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center md:gap-x-5 justify-between md:justify-start max-w-screen-xl mx-auto px-4 xl:px-0 py-10">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Rufina Indumentaria</h1>
        <p className="text-lg mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. molestiae
          placeat. Modi sequi placeat laudantium?
        </p>
        <Link
          className="bg-black hover:bg-slate-950 text-white font-bold py-2 px-4 rounded"
          href="/productos/all"
        >
          Ver productos
        </Link>
      </div>
    </main>
  );
}
