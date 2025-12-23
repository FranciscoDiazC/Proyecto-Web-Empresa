import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Mapa = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>

      {/* Mapa Google iframe */}
      <main className="flex-grow bg-background px-6 py-32 lg:px-[12%]">
        
        {/* Título */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Ubicación</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuéntranos fácilmente en nuestro punto de atención ubicado en Avenida Canelos 1234.
          </p>
        </div>

        {/* Contenedor del mapa */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.732509626836!2d-73.04945622344164!3d-36.801808672246615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5ae737f1741%3A0x7d27c0d350a1c48a!2zQmFycm9zIE3DqW5kZXogMTIzMCwgQ29uY2VwY2nDs24sIELDrW8gQsOtbw!5e1!3m2!1ses!2scl!4v1766473518894!5m2!1ses!2scl"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Horario de atención */}
        <div className="mt-10 text-center ">
          <p className="text-lg font-medium text-foreground">
            Horario de atención
          </p>
          <p className="text-muted-foreground mt-2">
            Lunes a viernes, de <strong>9:00 a 18:00 horas</strong>
          </p>
        </div>

      </main>

      <Footer></Footer>
    </div>
  )
}
