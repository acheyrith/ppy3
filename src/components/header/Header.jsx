import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import account from "../../img/account.png";
import cart from "../../img/cart.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <section className="Header section__padding">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>

      <form
        action=""
        className="header__search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </form>

      <div className="header__options">
        <div className="header__account">
          <a href="/account">
            <img src={account} alt="" />
          </a>
          <a href="/account" className="a-span">
            <span>Account</span>
          </a>
        </div>
        <div className="header__cart">
          <a href="/cart">
            <img src={cart} alt="" />
          </a>
          <a href="/cart" className="a-span">
            <span>Cart</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
