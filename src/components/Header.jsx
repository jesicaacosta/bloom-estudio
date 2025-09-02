import { useState } from "react"; // Importamos useState para manejar el menú en móviles

function Header() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Navbar fijo arriba, fondo blanco y sombra ligera
    <header className=" bg-[#bba5c8] shadow-sm fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 ">

        {/* Logo de la marca */}
        <img
          src="/bloom-estudio/logo.jpg"
          alt="Bloom Logo"
          className="h-20 w-20 object-cover"
        />


        {/* Links en desktop */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#servicios" className="hover:text-rose-600 transition">Servicios</a></li>
          <li><a href="#portafolio" className="hover:text-rose-600 transition">Portafolio</a></li>
          <li><a href="#contacto" className="hover:text-rose-600 transition">Contacto</a></li>
        </ul>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden text-rose-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Icono hamburguesa */}
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium">
            <li><a href="#servicios" className="hover:text-rose-600 transition">Servicios</a></li>
            <li><a href="#portafolio" className="hover:text-rose-600 transition">Portafolio</a></li>
            <li><a href="#contacto" className="hover:text-rose-600 transition">Contacto</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
