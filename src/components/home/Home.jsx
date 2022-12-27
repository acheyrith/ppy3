import React from "react";
import "./Home.css";
import HomeImg1 from "../../img/home_img1.jpg";
import HomeImg2 from "../../img/home_img2.jpg";
import HomeImg3 from "../../img/home_img3.jpg";
import HomeImg4 from "../../img/home_img4.jpg";
import HomeImg5 from "../../img/home_img5.webp";
import GreaterIcon from "../../img/greater_icon.png";
import LessIcon from "../../img/less_icon.png";
import { useState } from "react";
import Homeshortcut from "../../features/homeshortcut/Homeshortcut";

const Home = () => {
  const imgArray = [HomeImg1, HomeImg2, HomeImg3, HomeImg4, HomeImg5];
  const [imgIndex, setImgIndex] = useState(0);
  /*   const dotEl = document.querySelector('.dots:nth-child(imgIndex)'); */

  return (
    <section className="Home section__content">
      <div className="home__banner">
        <div className="left-arrow">
          <img
            src={LessIcon}
            alt=""
            onClick={() => {
              imgIndex === 0
                ? setImgIndex(imgArray.length - 1)
                : setImgIndex(imgIndex - 1);
            }}
          />
        </div>
        <div className="right-arrow">
          <img
            src={GreaterIcon}
            alt=""
            onClick={() => {
              imgIndex === imgArray.length - 1
                ? setImgIndex(0)
                : setImgIndex(imgIndex + 1);
            }}
          />
        </div>
        <img src={imgArray[imgIndex]} alt="" />
        <div className="dots">
          <div className="dot active-dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      {
        <div className="home__top-sale">
          <Homeshortcut title="Top Sale" />
        </div>
      }

      <div className="home__recently-add">
        <Homeshortcut title="Recently Add" />
      </div>
    </section>
  );
};

export default Home;
