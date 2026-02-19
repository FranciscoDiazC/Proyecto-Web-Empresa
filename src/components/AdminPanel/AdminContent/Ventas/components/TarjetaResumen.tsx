import { TarjetaResumenProps } from "../Interfaces/adminVentas.interface";

export const TarjetaResumen = ({ titulo, valor, colorClass = 'text-foreground' }: TarjetaResumenProps) => (
  <div className="bg-card p-6 rounded-lg shadow border border-border">
    <p className="text-muted-foreground text-sm mb-1">{titulo}</p>
    <p className={`text-2xl font-bold ${colorClass}`}>{valor}</p>
  </div>
);
