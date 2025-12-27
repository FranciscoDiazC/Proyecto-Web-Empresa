import { LuChartArea, LuFileText, LuLayoutDashboard, LuPackage, LuSettings, LuShoppingCart, LuUser } from "react-icons/lu";
import { AdminNavbar } from "../components/AdminPanel/AdminNavBar"
import { SidebarDesktop } from "../components/AdminPanel/SidebarDesktop";
import { useState } from "react";
import type { IconType } from "react-icons";
import { SidebarMobile } from "../components/AdminPanel/SidebarMobile";
import { AdminDashboardContent } from "../components/AdminPanel/AdminContent/AdminDashboardContent";
import { AdminVentasContent } from "../components/AdminPanel/AdminContent/AdminVentasContent";
import { AdminProductosWebContent } from "../components/AdminPanel/AdminContent/AdminProductosWebContent";
import { AdminAnaliticasContent } from "../components/AdminPanel/AdminContent/AdminAnaliticasContent";
import { AdminAuditoriaContent } from "../components/AdminPanel/AdminContent/AdminAuditoriaContent";
import { AdminConfigContent } from "../components/AdminPanel/AdminContent/AdminConfigContent";

interface MenuItem {
  name: string;
  icon: IconType;
}

const MENU_ITEMS: MenuItem[] = [
  { name: 'Dashboard', icon: LuLayoutDashboard },
  { name: 'Ventas', icon: LuShoppingCart },
  { name: 'Clientes', icon: LuUser },
  { name: 'Productos Web', icon: LuPackage },
  { name: 'Analíticas', icon: LuChartArea },
  { name: 'Auditoría', icon: LuFileText },
  { name: 'Configuración', icon: LuSettings },
];

export const AdminPanel = () => {

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);
  const [activeRoute, setActiveRoute] = useState<string>('Dashboard');

  const handleToggleDarkMode = (): void => {
  setDarkMode(!darkMode);
  };

  const handleToggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleToggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleToggleUserDropdown = (): void => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const handleRouteChange = (route: string): void => {
    setActiveRoute(route);
  };

  const handleLogout = (): void => {
    console.log('Cerrando sesión...');
    // Aquí iría la lógica de logout
  };

  return (
     <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        <AdminNavbar
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={handleToggleSidebar}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={handleToggleMobileMenu}
          userDropdownOpen={userDropdownOpen}
          onToggleUserDropdown={handleToggleUserDropdown}
          onLogout={handleLogout}
        />

        <SidebarDesktop
          isOpen={sidebarOpen}
          activeRoute={activeRoute}
          onRouteChange={handleRouteChange}
          onLogout={handleLogout}
          menuItems={MENU_ITEMS}
        />

        <SidebarMobile
          isOpen={mobileMenuOpen}
          activeRoute={activeRoute}
          onRouteChange={handleRouteChange}
          onLogout={handleLogout}
          menuItems={MENU_ITEMS}
        />

        <main
          className={`pt-16 transition-all duration-300 
            ${mobileMenuOpen ? 'pl-64 lg:pl-0' : 'pl-0'} 
            ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-0'}`}
        >
          <AdminDashboardContent></AdminDashboardContent>
          <AdminVentasContent></AdminVentasContent>
          <AdminProductosWebContent></AdminProductosWebContent>
          <AdminAnaliticasContent></AdminAnaliticasContent>
          <AdminAuditoriaContent></AdminAuditoriaContent>
          <AdminConfigContent></AdminConfigContent>
        </main>
      </div>
    </div>
  )
}
