import React from "react";
import "./Cart.css";
import EmptyCart from "../../img/empty_cart.png";

const Cart = () => {
  return (
    <section className="Cart section__content">
      <div className="cart__section">
        <img src={EmptyCart} alt="" className="cart__img" />
        <h3 className="cart__h3">Your cart is currently empty.</h3>
        <a href="/">
          <button className="cart__btn">Return to shop</button>
        </a>
      </div>
    </section>
  );
};

export default Cart;
