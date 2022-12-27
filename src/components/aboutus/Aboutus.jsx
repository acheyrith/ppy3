import React from "react";
import "./Aboutus.css";
import FooterImg2 from "../../img/footer_img2.jpg";

const Aboutus = () => {
  return (
    <section className="Aboutus section__content">
      <div className="aboutus__content">
        <div className="content-1">
          <div className="content-1_text">
            <h3>S-Shop</h3>
            <p>Your Nearest Online Stationery Store</p>
          </div>
        </div>

        <div className="content-2">
          <div className="content-2_bg">
            <img src={FooterImg2} alt="" />
          </div>
          <div className="content-2_text">
            <h4>S-Shop</h4>
            <p>
              First serve in 2022. At S-Shop, our goal is to offer you an
              unrivalled range of high-quality stationery and at the best
              prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
