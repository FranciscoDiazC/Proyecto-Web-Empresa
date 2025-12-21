export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Columna 1 */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Síguenos
            </h3>
            <div className="text-sm text-muted-foreground flex flex-row items-center">
              <img src="/Instagram_icon.svg" className="w-[clamp(5px,6vw,25px)]"></img>
              <div className="pl-1">DevGrafica</div>
            </div>
          </div>
        
          {/* Columna 2 */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Contactos
            </h3>
            <div className="text-sm text-muted-foreground flex flex-row items-center">
              <img src="/location-dot-solid-full.svg" className="w-[clamp(5px,6vw,25px)]"></img>
              <div className="pl-1">Avenida Los Canelos, 334. Concepcion, Chile.</div>
            </div>
            <div className="text-sm text-muted-foreground flex flex-row items-center">
              <img src="/at-solid-full.svg" className="w-[clamp(5px,6vw,25px)]"></img>
              <div className="pl-1">contacto@gmail.com</div>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Ubicacion
            </h3>
            <div className="text-sm text-muted-foreground space-y-2">
              {/* Contenido libre */}
            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
