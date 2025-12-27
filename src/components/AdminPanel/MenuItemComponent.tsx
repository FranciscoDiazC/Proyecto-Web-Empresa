import type { IconType } from "react-icons";

interface MenuItem {
  name: string;
  icon: IconType;
}

interface MenuItemComponentProps {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
  isCollapsed?: boolean;
}

export const MenuItemComponent = ({ item, isActive, onClick, isCollapsed = false }: MenuItemComponentProps) => {
  const Icon = item.icon;
  
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'hover:bg-muted text-foreground'
      }`}
    >
      <Icon className="flex-shrink-0 w-[20px]" />
      <span
        className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
        }`}
      >
        {item.name}
      </span>
    </button>
  );
};