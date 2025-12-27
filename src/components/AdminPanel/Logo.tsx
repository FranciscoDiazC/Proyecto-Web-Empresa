
export const Logo = () => {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-lg">D</span>
      </div>
      <span className="hidden sm:block font-bold text-xl text-foreground">DevGrafica</span>
    </div>
  );
};