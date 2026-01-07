import type { Cliente, Venta } from "../Interfaces/adminVentas.interface";

export const mockClientes: Cliente[] = [
  { rut_cliente: '12345678-9', nombre: 'Juan Pérez', correo: 'juan@email.com', numero: '+56912345678' },
  { rut_cliente: '98765432-1', nombre: 'María González', correo: 'maria@email.com', numero: '+56987654321' },
  { rut_cliente: '11111111-1', nombre: 'Pedro Rodríguez', correo: 'pedro@email.com', numero: '+56911111111' },
  { rut_cliente: '22222222-2', nombre: 'Ana Martínez', correo: 'ana@email.com', numero: '+56922222222' },
];

export const generateMockVentas = (): Venta[] => {
  const ventas: Venta[] = [];
  for (let i = 1; i <= 45; i++) {
    const cliente = mockClientes[Math.floor(Math.random() * mockClientes.length)];
    const monto = Math.floor(Math.random() * 1000000) + 50000;
    const abonado = Math.random() > 0.3 ? Math.floor(Math.random() * monto) : 0;
    const fecha = new Date();
    fecha.setDate(fecha.getDate() - Math.floor(Math.random() * 90));
    
    ventas.push({
      id_venta: i,
      rut_cliente: cliente.rut_cliente,
      fecha,
      monto,
      descripcion: `Venta de servicio #${i}`,
      pagada: abonado >= monto,
      abonado,
      cliente,
    });
  }
  return ventas;
};