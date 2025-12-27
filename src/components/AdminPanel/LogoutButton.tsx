import { FaSignOutAlt } from "react-icons/fa";

interface LogoutButtonProps {
  onClick: () => void;
  isCollapsed?: boolean;
}

export const LogoutButton = ({ onClick, isCollapsed = false }: LogoutButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ease-out duration-500 hover:text-destructive hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
    >
      <FaSignOutAlt className="flex-shrink-0 w-[20px]" />
      <span
        className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
        }`}
      >
        Cerrar Sesión
      </span>
    </button>
  );
};