import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <>
        <nav className="fixed top-0 left-0 w-full bg-background border-b border-border z-50 text-center text-accent">
            Entregamos tu encargo en menos de 24 horas. +569-45535654
        </nav>
        <NavBar></NavBar>
    </>
  )
}
