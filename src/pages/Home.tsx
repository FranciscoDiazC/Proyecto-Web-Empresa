import { HeroSection } from "../components/Home/HeroSection"
import { MainContent } from "../components/Home/MainContent"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Home = () => {
  return (
    <>
      {/* Header */}
      <Header></Header>

      {/* Hero Section (Primera seccion visual fuerte)*/}
      <HeroSection></HeroSection>

      {/* Content (Productos en este caso) */}
      <MainContent></MainContent>

      {/* Footer */}
      <Footer></Footer>
    </>
  )
}
