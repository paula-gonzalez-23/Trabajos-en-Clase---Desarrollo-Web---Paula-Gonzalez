import type { Producto } from '../types/productos';

export const productosIniciales: Producto[] = [
  {
    id: '1',
    nombre: 'Coca-Cola',
    descripcion: 'Refresco de cola',
    precio: 1.5,
    categoria: 'Bebidas Frías',
    unidades: 100
  },
  {
    id: '2',
    nombre: 'Hamburguesa',
    descripcion: 'Hamburguesa con queso',
    precio: 5.0,
    categoria: 'Comida',
    unidades: 50
  }
];