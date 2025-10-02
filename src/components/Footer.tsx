
import React from "react";
import "./styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Henko Tienda. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
