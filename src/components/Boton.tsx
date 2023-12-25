// @ts-nocheck

const Boton = ({ children, className = "", disabled = false, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement> & { disabled?: boolean }) => {
  const botonClases = `bg-black hover:bg-slate-950 text-white font-bold py-2 px-4 rounded ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button className={botonClases} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Boton;



