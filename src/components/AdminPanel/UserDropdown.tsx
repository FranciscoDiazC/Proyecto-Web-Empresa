import { FaSignOutAlt } from "react-icons/fa";
import { FaCircleUser, FaGear } from "react-icons/fa6";

interface UserDropdownProps {
    isOpen: boolean;
    onToggle: () => void;
    onLogout: () => void;
}

export const UserDropdown = ({ isOpen, onToggle, onLogout }: UserDropdownProps) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors"
      >
        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
          <FaCircleUser className="text-secondary-foreground w-[18px]" />
        </div>
        <span className="hidden sm:block font-medium text-foreground">Admin</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg overflow-hidden">
          <button className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center gap-3 text-popover-foreground">
            <FaGear className="w-[18px]" />
            <span>Configuración</span>
          </button>
          <button 
            onClick={onLogout}
            className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center gap-3 text-destructive"
          >
            <FaSignOutAlt className="w-[18px]"/>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      )}
    </div>
  );
};