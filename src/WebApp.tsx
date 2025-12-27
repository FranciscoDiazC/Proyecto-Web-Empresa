import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Contacto } from "./pages/Contacto"
import { Mapa } from "./pages/Mapa"
import { Nosotros } from "./pages/Nosotros"
import { AdminPanel } from "./pages/AdminPanel"


export const WebApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/contacto" element={<Contacto></Contacto>}></Route>
      <Route path="/mapa" element={<Mapa></Mapa>}></Route>
      <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
      <Route path="/admin" element={<AdminPanel></AdminPanel>}></Route>
    </Routes>
  )
}
