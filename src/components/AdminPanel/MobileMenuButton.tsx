import { FaAngleDoubleLeft, FaBars } from "react-icons/fa";

interface MobileMenuButtonProps {
    isOpen: boolean;
    onToggle: () => void;
}

export const MobileMenuButton = ({ isOpen, onToggle }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
      aria-label="Toggle mobile menu"
    >
      {isOpen ? <FaAngleDoubleLeft className="w-[24px]"/> : <FaBars className="w-[24px]" />}
    </button>
  );
};