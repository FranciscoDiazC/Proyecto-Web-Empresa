import { FaMoon, FaSun } from "react-icons/fa";

interface DarkModeToggleProps {
    darkMode: Boolean;
    onToggle: () => void;
}

export const DarkModeToggle = ({ darkMode, onToggle }: DarkModeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 hover:bg-muted rounded-lg transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun className="w-[20px]"></FaSun> : <FaMoon className="w-[20px]"></FaMoon>}
    </button>
  );
};