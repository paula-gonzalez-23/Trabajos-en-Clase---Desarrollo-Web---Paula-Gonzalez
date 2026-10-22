/**creamos los productos que se van a vender en la tienda
*describimos la forma de los datos
*/

export const CATEGORIAS = ['Bebidas Calientes', 'Bebidas Frías', 'Comida', 'Postres', 'Snacks', 'Otros'] as const;

export type Categoria = (typeof CATEGORIAS)[number];

export const UNIDADES_MINIMAS = 5;

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: Categoria;
  unidades: number; 
}

export type ProductoDatos = Omit<Producto, 'id'>;

