
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" className="link">Henko Tienda</Link>
      </div>
      <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/products" className="link">Productos</Link>
        <Link to="/cart" className="link">Carrito</Link>
        <Link to="/checkout" className="link">Checkout</Link>
        <Link to="/contact" className="link">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
