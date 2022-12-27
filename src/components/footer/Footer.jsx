import React from "react";
import "./Footer.css";
import Logo from "../../img/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="footer__content">
        <div className="footer__logo_description">
          <img src={Logo} alt="" />
          <p>
            Online Stationery Shop. Wholesale and retail of quality office and
            school supplies, art materials, gifts, souvenirs, and sports
            equipment.
          </p>
        </div>
        <div className="footer__get_in_touch">
          <h3>Get in touch</h3>

          <p>
            The Royal University of Phnom PenhRussian Federation Boulevard,Toul
            Kork, Phnom Penh, Cambodia.
          </p>

          <p className="phone_section">
            <FaPhoneAlt className="phone_icon" />
            <span>Tel: 012 345 678</span>
          </p>

          <p className="phone_section">
            <FaPhoneAlt className="phone_icon" />
            <span>Tel: 098 765 432</span>
          </p>

          <div className="footer__social-media">
            <FaFacebook className="facebook-icon" />
            <FaInstagram className="instagram-icon" />
            <FaTwitter className="twitter-icon" />
          </div>
        </div>

        <div className="footer__sitemap">
          <h3>Sitemap</h3>
          <div>
            <a href="/">Home</a>
            <a href="/books">Books</a>
            <a href="/pens">Pens</a>
            <a href="/pencils">Pencils</a>
            <a href="/other">Other</a>
            <a href="/aboutus">About us</a>
            <a href="/policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright @ 2022 S-Shop - All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
