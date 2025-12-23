import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Contacto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>

      {/* Contenido principal */}
      <main className="flex-grow bg-background">
        <section className="bg-background text-foreground px-6 py-32 lg:px-[12%]">

          {/* Titulo */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contacto</h1>
            <div className="text-muted-foreground max-w-2xl mx-auto">
                <div>Comunícate con nosotros y recibe asesoría personalizada.</div>
                <div>Nuestro horario de atención es de lunes a viernes</div>
                <div>Mañana: 09:30.hrs - 13:00.hrs</div>
                <div>Tarde: 15:30.hrs - 19:00.hrs</div>
            </div>
          </div>

          {/* Informacion de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <p className="text-muted-foreground">+5693442543</p>
            </div>

            <a href="https://wa.me/56912345678">
              <div className="bg-card border border-border rounded-xl p-6 text-center transition duration-200 ease-out hover:drop-shadow-[0px_0px_15px_rgba(22,255,0,1)]">
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">Presiona para abrir un chat</p>
              </div>
            </a>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Correo</h3>
              <p className="text-muted-foreground">correoadmin@gmail.com</p>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  )
}
