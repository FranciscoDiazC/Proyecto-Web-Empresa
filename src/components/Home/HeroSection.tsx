import { WspContactButton } from "../WspContactButton"

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

        <WspContactButton link="https://wa.me/56912345678" text="¡Escribenos y crearemos tu idea!"></WspContactButton>
        
      </div>
    </section>
  )
}
