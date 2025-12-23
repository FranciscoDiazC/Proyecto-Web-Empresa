import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-[25px] left-0 w-full bg-background border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-semibold text-foreground">
          DevGrafica
        </div>
        {/* Links desktop (Inicialmente hidden, en "md" -> flex)*/}
        <ul className="hidden md:flex text-sm font-medium text-muted-foreground">
          <li className="hover:text-foreground transition">
            <Link to="/" className="block px-6 py-5">Inicio</Link>
          </li>
          <li className="hover:text-foreground transition">
            <Link to="/contacto" className="block px-6 py-5">Contacto</Link>
          </li>
          <li className="hover:text-foreground transition">
            <Link to="/mapa" className="block px-6 py-5">Mapa</Link>
          </li>
          <li className="hover:text-foreground transition">
            <Link to="/nosotros" className="block px-6 py-5">Nosotros</Link>
          </li>
        </ul>

        {/* Botón mobile */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <ul className="flex flex-col px-4 text-sm text-card-foreground">
            <li>
              <Link to="/" className="block py-3">Inicio</Link>
            </li>
            <li>
              <Link to="/contacto" className="block py-3">Contacto</Link>
            </li>
            <li>
              <Link to="/mapa" className="block py-3">Mapa</Link>
            </li>
            <li>
              <Link to="/nosotros" className="block py-3">Nosotros</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
