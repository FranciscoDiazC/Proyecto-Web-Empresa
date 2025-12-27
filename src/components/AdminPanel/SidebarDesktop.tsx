import type { IconType } from "react-icons";
import { LogoutButton } from "./LogoutButton";
import { MenuItemComponent } from "./MenuItemComponent";

interface MenuItem {
  name: string;
  icon: IconType;
}

interface SidebarProps {
    isOpen: boolean;
    activeRoute: string;
    onRouteChange: (route: string) => void;
    onLogout: () => void;
    menuItems: MenuItem[];
}

export const SidebarDesktop = ({ isOpen, activeRoute, onRouteChange, onLogout, menuItems }: SidebarProps) => {
  return (
    <aside
      className={`hidden lg:block fixed left-0 top-16 bottom-0 bg-card border-r border-border transition-all duration-300 z-40 
        ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}
      `}
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <MenuItemComponent
              key={item.name}
              item={item}
              isActive={activeRoute === item.name}
              onClick={() => onRouteChange(item.name)}
              isCollapsed={!isOpen}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <LogoutButton onClick={onLogout} isCollapsed={!isOpen} />
        </div>
      </div>
    </aside>
  );
};
