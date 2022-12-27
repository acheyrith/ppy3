import React from "react";
import "./Itemdetail.css";
import { useLocation } from "react-router-dom";
import { FaTruckMoving, FaLock, FaReply } from "react-icons/fa";
import { useState } from "react";

const Itemdetail = () => {
  const location = useLocation();
  const itemData = location.state.data;
  const [quantityNumber, setQuantityNumber] = useState(1);

  return (
    <section className="details section__content">
      <div className="details__container">
        <div className="details__img">
          <img src={itemData.img} alt="" />
        </div>

        <div className="details__description">
          <a href="/">Home</a>

          <h5>{itemData.name}</h5>

          <p>{itemData.factory}</p>

          <h6>Price</h6>

          {itemData.newPrice == null ? (
            <p className="sale-price1">{itemData.oldPrice}</p>
          ) : (
            <div className="all-price">
              <span className="old-price">{itemData.oldPrice}</span>
              <span className="sale-price2">{itemData.newPrice}</span>
            </div>
          )}

          <h6>Quantity</h6>

          <div className="quantity-btn">
            <button
              className="quantity-btn__sub"
              onClick={() => {
                quantityNumber == 1
                  ? setQuantityNumber(1)
                  : setQuantityNumber(quantityNumber - 1);
              }}
            >
              -
            </button>
            <span>{quantityNumber}</span>
            <button
              className="quantity-btn__add"
              onClick={() => {
                quantityNumber > 0 && setQuantityNumber(quantityNumber + 1);
              }}
            >
              +
            </button>
          </div>

          <div className="sale-conditions">
            <FaLock className="sale-conditions__icon" />
            <p>Secure payments</p>
          </div>

          <div className="sale-conditions">
            <FaTruckMoving className="sale-conditions__icon" />
            <p>Free shipping from $25</p>
          </div>

          <div className="sale-conditions">
            <FaReply className="sale-conditions__icon" />
            <p>28 Days return</p>
          </div>

          <div className="options">
            <div className="add-to-cart">
              <button>Add to cart</button>
            </div>

            <div className="buy-now">
              <button>Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itemdetail;
