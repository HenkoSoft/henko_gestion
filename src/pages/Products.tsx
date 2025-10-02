import React, { useContext } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const Product: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null; // seguridad
  const { addToCart } = cartContext;

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p style={styles.price}>${product.price}</p>
          <button style={styles.button} onClick={() => addToCart(product)}>
            Agregar al carrito
          </button>
          <Link to={`/products/${product.id}`} style={styles.link}>
            Ver detalle
          </Link>
        </div>
      ))}
    </div>
  );
};

// estilos inline (puedes luego pasarlos a CSS)
const styles: { [key: string]: React.CSSProperties } = {
  container: { display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" },
  card: { border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", width: "200px", textAlign: "center" },
  image: { width: "100%", borderRadius: "4px" },
  price: { fontWeight: "bold" },
  button: { marginTop: "0.5rem", padding: "0.5rem", width: "100%", backgroundColor: "#1E293B", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" },
  link: { display: "block", marginTop: "0.5rem", textDecoration: "none", color: "#1E293B" },
};

export default Product;
