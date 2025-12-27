import { DarkModeToggle } from "./DarkModeToggle";
import { Logo } from "./Logo";
import { MobileMenuButton } from "./MobileMenuButton";
import { SearchBar } from "./SearchBar";
import { SidebarToggleButton } from "./SidebarToggleButton";
import { UserDropdown } from "./UserDropdown";

interface AdminNavbarProps {

  darkMode: boolean;
  onToggleDarkMode: () => void;

  sidebarOpen: boolean;
  onToggleSidebar: () => void;

  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  
  userDropdownOpen: boolean;
  onToggleUserDropdown: () => void;
  onLogout: () => void;
}

export const AdminNavbar = ({ 
  darkMode, 
  onToggleDarkMode, 
  sidebarOpen, 
  onToggleSidebar,
  mobileMenuOpen,
  onToggleMobileMenu,
  userDropdownOpen,
  onToggleUserDropdown,
  onLogout
}: AdminNavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-card border-b border-border z-50     flex items-center justify-between     px-4 lg:px-6">
    
      <div className="ml-4 flex-shrink-0 flex flex-row gap-8 min-w-[220px]">
        <Logo></Logo>
        <SidebarToggleButton isOpen={sidebarOpen} onToggle={onToggleSidebar} />
      </div>

      <SearchBar />

      <div className="md:hidden flex-1"></div>

      <div className="flex items-center gap-2 min-w-[220px]">
        <DarkModeToggle darkMode={darkMode} onToggle={onToggleDarkMode} />
        <MobileMenuButton isOpen={mobileMenuOpen} onToggle={onToggleMobileMenu} />
        <UserDropdown 
          isOpen={userDropdownOpen} 
          onToggle={onToggleUserDropdown}
          onLogout={onLogout}
        />
      </div>
    </nav>
  );
};