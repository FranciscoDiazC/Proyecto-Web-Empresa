import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-semibold text-foreground">
          DevGrafica
        </div>
        {/* Links desktop (Inicialmente hidden, en "md" -> flex)*/}
        <ul className="hidden md:flex text-sm font-medium text-muted-foreground">
          <li className="hover:text-foreground transition">
            <a href="#home" className="block px-6 py-5">Inicio</a>
          </li>
          <li className="hover:text-foreground transition">
            <a href="#about" className="block px-6 py-5">Contacto</a>
          </li>
          <li className="hover:text-foreground transition">
            <a href="#projects" className="block px-6 py-5">Mapa</a>
          </li>
          <li className="hover:text-foreground transition">
            <a href="#contact" className="block px-6 py-5">Productos</a>
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
              <a href="#home" className="block py-3">Inicio</a>
            </li>
            <li>
              <a href="#about" className="block py-3">Contacto</a>
            </li>
            <li>
              <a href="#projects" className="block py-3">Mapa</a>
            </li>
            <li>
              <a href="#contact" className="block py-3">Productos</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
