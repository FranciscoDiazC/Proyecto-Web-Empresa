import { IconType } from "react-icons";
import { MenuItemComponent } from "./MenuItemComponent";
import { LogoutButton } from "./LogoutButton";

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

export const SidebarMobile = ({ isOpen, activeRoute, onRouteChange, onLogout, menuItems }: SidebarProps) => {
  return (
    <aside
      className={`lg:hidden fixed left-0 top-16 bottom-0 bg-card border-r border-border z-40 flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64`}
    >
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <MenuItemComponent
            key={item.name}
            item={item}
            isActive={activeRoute === item.name}
            onClick={() => onRouteChange(item.name)}
          />
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <LogoutButton onClick={onLogout} />
      </div>
    </aside>
  );
};