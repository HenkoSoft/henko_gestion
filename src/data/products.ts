
// src/data/products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

// Mock de productos
export const products: Product[] = [
  {
    id: 1,
    name: "Celular A",
    price: 19999,
    image: "https://via.placeholder.com/150",
    description: "Celular de alta gama con cámara excelente",
  },
  {
    id: 2,
    name: "Celular B",
    price: 14999,
    image: "https://via.placeholder.com/150",
    description: "Celular económico pero potente",
  },
  {
    id: 3,
    name: "Celular C",
    price: 24999,
    image: "https://via.placeholder.com/150",
    description: "Celular premium con pantalla gigante",
  },
];
