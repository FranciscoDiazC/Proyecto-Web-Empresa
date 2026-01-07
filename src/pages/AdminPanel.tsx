import { LuFileText, LuLayoutDashboard, LuShoppingCart, LuCreditCard, LuWrench, LuFile, LuUser } from "react-icons/lu";
import { AdminNavbar } from "../components/AdminPanel/AdminNavBar"
import { SidebarDesktop } from "../components/AdminPanel/SidebarDesktop";
import { useState } from "react";
import type { IconType } from "react-icons";
import { SidebarMobile } from "../components/AdminPanel/SidebarMobile";
import { AdminDashboardContent } from "../components/AdminPanel/AdminContent/Dashboard/AdminDashboardContent";
import { AdminVentasContent } from "../components/AdminPanel/AdminContent/Ventas/AdminVentasContent";
import { AdminAuditoriaContent } from "../components/AdminPanel/AdminContent/Auditoria/AdminAuditoriaContent";
import { AdminDeudasContent } from "../components/AdminPanel/AdminContent/Deudas/AdminDeudasContent";
import { AdminServiciosContent } from "../components/AdminPanel/AdminContent/Servicios/AdminServiciosContent";
import { AdminContenidoContent } from "../components/AdminPanel/AdminContent/Contenido/AdminContenidoContent";
import { AdminClientesContent } from "../components/AdminPanel/AdminContent/Clientes/AdminClientesContent";

interface MenuItem {
  name: string;
  icon: IconType;
}

const MENU_ITEMS: MenuItem[] = [
  { name: 'Dashboard', icon: LuLayoutDashboard },
  { name: 'Ventas', icon: LuShoppingCart },
  { name: 'Deudas', icon: LuCreditCard },
  { name: 'Clientes', icon: LuUser },
  { name: 'Servicios', icon: LuWrench },
  { name: 'Contenido', icon: LuFile },
  { name: 'Auditoría', icon: LuFileText },
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

  const renderContent = () => {
    switch (activeRoute) {
      case 'Dashboard':
        return <AdminDashboardContent />;
      case 'Ventas':
        return <AdminVentasContent />;
      case 'Deudas':
        return <AdminDeudasContent />;
      case 'Clientes':
        return <AdminClientesContent/>;
      case 'Servicios':
        return <AdminServiciosContent />;
      case 'Contenido':
        return <AdminContenidoContent />;
      case 'Auditoría':
        return <AdminAuditoriaContent />;
      default:
        return <AdminDashboardContent />;
    }
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
          {renderContent()}
        </main>
      </div>
    </div>
  )
}