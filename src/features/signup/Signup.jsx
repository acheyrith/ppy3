import React from "react";
import "./Signup.css";
import Logo from "../../img/logo.png";

const Signup = () => {
  return (
    <section className="Signup section__content">
      <div className="signup-img">
        <img src={Logo} alt="logo" />
      </div>

      <div className="email">
        <input type="email" placeholder="Email" />
      </div>

      <div className="name">
        <input type="text" placeholder="Name" />
      </div>

      <div className="phonenumber">
        <input type="text" placeholder="Phone number" />
      </div>

      <div className="address">
        <input type="text" placeholder="Address" />
      </div>

      <div className="password">
        <input type="password" placeholder="Password" />
      </div>

      <p>
        By signing in you accept the
        <span>
          <a href="#"> Terms of Use and the Privacy Policy.</a>
        </span>
      </p>

      <div className="signup">
        <a href="#">
          <button>Sign Up</button>
        </a>
      </div>

      <p>
        Already have an account?
        <span>
          <a href="/account"> Login here</a>
        </span>
      </p>
    </section>
  );
};

export default Signup;
