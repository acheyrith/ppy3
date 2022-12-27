import React from "react";
import "./Login.css";
import Logo from "../../img/logo.png";

const Login = () => {
  return (
    <section className="Login">
      <div className="login-img">
        <img src={Logo} alt="logo" />
      </div>

      <div className="email">
        <input type="email" placeholder="Email" />
      </div>

      <div className="password">
        <input type="password" placeholder="Password" />
      </div>

      <div className="forgot-password">
        <a href="#">Forgot your password?</a>
      </div>

      <div className="signin">
        <a href="#">
          <button>Sign in</button>
        </a>
      </div>

      <p>
        Don't have an account?
        <span>
          <a href="/account/signup"> Register now</a>
        </span>
      </p>

      <p>
        By signing in you accept the
        <span>
          <a href="#"> Terms of Use and the Privacy Policy.</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
