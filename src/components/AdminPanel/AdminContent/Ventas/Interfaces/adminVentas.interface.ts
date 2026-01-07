export interface Cliente {
  rut_cliente: string;
  nombre: string;
  correo: string;
  numero: string;
}

export interface Venta {
  id_venta: number;
  rut_cliente: string;
  fecha: Date;
  monto: number;
  descripcion: string;
  pagada: boolean;
  abonado: number;
  cliente?: Cliente;
}

export type EstadoVenta = 'Todas' | 'Pendiente' | 'Parcial' | 'Pagada';
export type OrdenFecha = 'asc' | 'desc';

export interface VentasStats {
  totalVentas: number;
  dineroVendido: number;
  dineroRecibido: number;
  dineroDeuda: number;
}

export interface TarjetaResumenProps {
    titulo: String;
    valor: String;
    colorClass: String;
}