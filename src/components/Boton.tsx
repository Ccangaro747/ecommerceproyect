// @ts-nocheck

const Boton = ({ children, className = "", ...args }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-black hover:bg-slate-950 text-white font-bold py-2 px-4 rounded ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Boton;


