import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="Navbar">
      <div className="navbar__links">
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/pens">Pens</a>
        <a href="/pencils">Pencils</a>
        <a href="/others">Others</a>
        <a href="/aboutus">About us</a>
      </div>
    </section>
  );
};

export default Navbar;
