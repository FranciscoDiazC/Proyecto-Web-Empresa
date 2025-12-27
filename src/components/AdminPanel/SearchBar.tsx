import { FaMagnifyingGlass } from "react-icons/fa6";


export const SearchBar = () => {
  return (
    <div className="flex-1 max-w-md mx-4 hidden md:block">
      <div className="relative">
        <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-[20px]"></FaMagnifyingGlass>
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full pl-10 pr-4 py-2 bg-muted border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
        />
      </div>
    </div>
  );
};