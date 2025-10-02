
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "300px", borderRadius: "8px" }} />
      <p>{product.description}</p>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
