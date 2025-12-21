
export const HeroSection = () => {
  return (
    <section className="relative mt-16 w-full h-[500px] "> {/* pt-16, para que el navbar que mide 4rem no tape el herosection */}
        <video
        autoPlay
        loop
        muted
        playsInline /* Evita Fullscreen en mobile */
        className="absolute inset-0 w-full h-full object-cover"
        >
            <source src="/hero.webm" type="video/webm" />
            {/* Introducir fallback en mp4 aca */}
            Tu navegador no puede cargar Webm
        </video>

      {/* Overlay Oscuro */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Contenido encima del video */}
      <div className="relative z-10 flex flex-col gap-8 items-center justify-center h-full text-white mx-auto
      max-w-[90%]
      md:max-w-[70%]
      lg:max-w-[40%]">
        

        <h1 className="text-[clamp(2rem,2.5vw,4rem)] font-bold text-center">
          Bienvenidos a{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            DevGrafica
          </span>
        </h1>
        

        <div>
          <h2 className="text-[clamp(1rem,2.5vw,1.65rem)] font-bold text-center">
            Impresión profesional para tu negocio o proyecto.
          </h2>
          <h2 className="text-[clamp(1rem,2.5vw,1.65rem)] font-bold text-center">
            Pendones de gran formato, lienzos, stickers, rotulación vehicular y mas, todo con la mejor calidad y precio.
          </h2>
        </div>
        <h2 className="text-[clamp(1rem,2.5vw,1.65rem)] font-bold text-center">
            ¡Cotiza hoy y haz que tu marca se vea!
        </h2>

        <a
          href="https://wa.me/56912345678"
          target="_blank"
          rel="noopener noreferrer"> {/* noopener evita tabnapping, seguridad | noreferrer Oculta la URL de origen | */}
          <div className="flex flex-row items-center gap-4 bg-card rounded-xl px-6 py-1 border-2 border-border drop-shadow-[0px_0px_10px_rgba(255,255,255,0.75)]">
            <div className="text-[clamp(1.3rem,2.5vw,1.65rem)] text-card-foreground font-bold text-center">
              ¡Escribenos y crearemos tu idea!
            </div>
            <img
              src="/WhatsApp.svg"
              className="w-[clamp(50px,6vw,70px)] h-auto cursor-pointer drop-shadow-[4px_4px_10px_rgba(0,0,0,0.75)]"
              alt="WhatsApp"
            />
          </div>
        </a>
        
      </div>
    </section>
  )
}
