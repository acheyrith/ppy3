import React from "react";
import "./Homeshortcut.css";
import { topSaleData } from "../../data/topSaleData";
import { useNavigate } from "react-router-dom";

const Homeshortcut = ({ title }) => {
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate("/itemdetail", {
      state: {
        data: data,
      },
    });
  };

  return (
    <div className="component__top-sale">
      <p className="title">{title}</p>

      <div className="all-blocks">
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

      <p className="see-more">See More{">>"}</p>
    </div>
  );
};

export default Homeshortcut;
