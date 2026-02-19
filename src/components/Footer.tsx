import { FaAt, FaPhoneVolume } from "react-icons/fa"
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6"
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri"

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
              <RiInstagramFill className="w-[clamp(5px,6vw,20px)] h-[clamp(5px,6vw,20px)] text-black"></RiInstagramFill>
              <div className="pl-1">DevGrafica</div>
            </div>
            <div className="text-sm text-muted-foreground flex flex-row items-center">
              <RiFacebookCircleFill className="w-[clamp(5px,6vw,20px)] h-[clamp(5px,6vw,20px)] text-black"></RiFacebookCircleFill>
              <div className="pl-1">DevGrafica</div>
            </div>
            <div className="text-sm text-muted-foreground flex flex-row items-center">
              <FaSquareXTwitter className="w-[clamp(5px,6vw,20px)] h-[clamp(5px,6vw,20px)] text-black"></FaSquareXTwitter>
              <div className="pl-1">DevGrafica</div>
            </div>
          </div>
        
          {/* Columna 2 */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Contactos
            </h3>
            <div className="text-sm text-muted-foreground flex flex-row items-center">
              <FaLocationDot className="w-[clamp(5px,6vw,20px)] h-[clamp(5px,6vw,20px)] text-black" ></FaLocationDot>
              <div className="pl-1">Avenida Los Canelos, 334. Concepción, Chile.</div>
            </div>
            <div className="text-sm text-muted-foreground flex flex-row items-center">
              <FaAt className="w-[clamp(5px,6vw,20px)] h-[clamp(5px,6vw,20px)] text-black"></FaAt>
              <div className="pl-1">contacto@gmail.com</div>
            </div>
            <div className="text-sm text-muted-foreground flex flex-row items-center">
              <FaPhoneVolume className="w-[clamp(5px,6vw,20px)] h-[clamp(5px,6vw,20px)] text-black"></FaPhoneVolume>
              <div className="pl-1">+56 9 2333 5434 (Llamadas y WhatsApp)</div>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Ubicación
            </h3>

            {/* Dirección */}
            <p className="text-sm text-muted-foreground">
              Avenida Los Canelos 334, Concepción, Chile
            </p>

            {/* Mapa */}
            <div className="w-full h-[180px] rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.732509626836!2d-73.04945622344164!3d-36.801808672246615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5ae737f1741%3A0x7d27c0d350a1c48a!2zQmFycm9zIE3DqW5kZXogMTIzMCwgQ29uY2VwY2nDs24sIELDrW8gQsOtbw!5e1!3m2!1ses!2scl!4v1766473518894!5m2!1ses!2scl"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevGrafica. Todos los derechos reservados.
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
