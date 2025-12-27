import { FaChevronLeft } from "react-icons/fa";

interface SidebarToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const SidebarToggleButton = ({ isOpen, onToggle }: SidebarToggleButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className="hidden lg:block p-2 hover:bg-muted rounded-lg transition-colors"
      aria-label="Toggle sidebar"
    >
      <FaChevronLeft
        className={`w-[24px] transition-transform duration-300 ${!isOpen ? 'rotate-180' : ''}`}
      />
    </button>
  );
};