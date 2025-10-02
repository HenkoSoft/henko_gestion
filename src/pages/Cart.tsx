
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return <p>Cart no disponible</p>;

  const { cart, removeFromCart } = cartContext;

  if (cart.length === 0) return <p>El carrito está vacío</p>;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}>
          <h2>{item.name}</h2>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.price}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Cart;
