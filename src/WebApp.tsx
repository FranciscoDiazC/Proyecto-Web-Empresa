import { Footer } from "./components/Footer"
import { HeroSection } from "./components/HeroSection"
import { MainContent } from "./components/MainContent"
import { NavBar } from "./components/NavBar"


export const WebApp = () => {
  return (
    <>
      {/* Header */}
      <NavBar></NavBar>

      {/* Hero Section (Primera seccion visual fuerte)*/}
      <HeroSection></HeroSection>

      {/* Content (Productos en este caso) */}
      <MainContent></MainContent>

      {/* Footer */}
      <Footer></Footer>
    </>
  )
}
