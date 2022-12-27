import React from "react";
import "./Pages.css";
import { topSaleData } from "../../data/topSaleData";
import { useNavigate } from "react-router-dom";

const Pages = ({ title }) => {
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate("/itemdetail", {
      state: {
        data: data,
      },
    });
  };

  return (
    <div className="section__page">
      <div className="section__page-title">{title}</div>

      <div className="section__page-content">
        <div className="section__page-content-menu">
          <h5>
            Availability<span>&#62;</span>
          </h5>
          <h5>
            Price<span>&#62;</span>
          </h5>
          <h5>
            Product Type<span>&#62;</span>
          </h5>
          <h5>
            Brand<span>&#62;</span>
          </h5>
        </div>

        <div className="wrap-content-details">
          <div className="section__page-content-details">
            <div className="details-title">
              <p>99 products</p>
              <p>
                Sort<span>&#62;</span>
              </p>
            </div>

            <div className="details-blocks">
              {topSaleData.map((data, key) => {
                return (
                  <div
                    className="block-content"
                    key={key}
                    onClick={() => handleClick(data)}
                  >
                    <img src={data.img} alt="" />

                    <h5>{data.name}</h5>

                    {data.newPrice == null ? (
                      <p>{data.oldPrice}</p>
                    ) : (
                      <>
                        <p className="newPrice">{data.newPrice}</p>
                        <p className="oldPrice">{data.oldPrice}</p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
