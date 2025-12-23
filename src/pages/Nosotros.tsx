import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { WspContactButton } from "../components/WspContactButton"

export const Nosotros = () => {
  return (
    <>
      <Header></Header>

      {/* Sección Nosotros */}
      <section className="bg-background text-foreground py-32 px-6 lg:px-[12%]">
        
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Nosotros</h1>
          <p className="text-muted-foreground text-lg">
            Especialistas en impresión digital, soluciones gráficas e instalaciones profesionales
          </p>
        </div>

        {/* Carrusel + Texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Carrusel (placeholder) */}
          <div className="w-full h-[320px] rounded-xl bg-card border border-border flex items-center justify-center">
            <span className="text-muted-foreground">
              Carrusel de proyectos realizados
            </span>
          </div>

          {/* Texto principal */}
          <div className="space-y-5">
            <p>
              Somos una empresa especializada en <strong>impresión digital de gran formato</strong> y
              soluciones gráficas integrales. Trabajamos con tecnología de plotter y materiales
              profesionales para dar vida a proyectos publicitarios, corporativos y comerciales.
            </p>

            <p>
              Realizamos impresiones en lona, adhesivo blanco y transparente, backlight film,
              one way vision, papel sintético, frosted y empavonados. Además, confeccionamos
              adhesivos troquelados, pendones roller, gigantografías, letreros, acrílicos y
              papelería corporativa.
            </p>

            <p>
              Nuestro enfoque se basa en la calidad, el detalle y la rapidez, ofreciendo
              <strong> entrega en 24 horas hábiles</strong> sin comprometer el resultado final.
            </p>
          </div>
        </div>

        {/* Servicios */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Servicios de instalación
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Gráfica vehicular y reflectiva",
              "Instalación de adhesivos en locales y oficinas",
              "Empavonados y frosted",
              "One way vision",
              "Aplicación sobre distintas superficies",
              "Montaje profesional de gráficas"
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Nuestra forma de trabajar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">Calidad</h3>
              <p className="text-sm text-muted-foreground">
                Materiales profesionales y terminaciones cuidadas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Rapidez</h3>
              <p className="text-sm text-muted-foreground">
                Entregas en 24 horas hábiles.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Compromiso</h3>
              <p className="text-sm text-muted-foreground">
                Acompañamiento y comunicación directa con el cliente.
              </p>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="mt-16 text-center">
          <p className="text-lg font-medium">
            ¡Habla con nosotros!
          </p>
          <p className="text-muted-foreground mt-2">
            Contáctanos vía WhatsApp, teléfono o correo y te asesoramos.
          </p>
          <div className="flex flex-col items-center py-6">
            <WspContactButton link="https://wa.me/56912345678" text="¿Que tienes en mente?"></WspContactButton>
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}
