
// src/components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem", minHeight: "80vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
