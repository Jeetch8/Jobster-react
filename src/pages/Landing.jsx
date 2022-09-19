import React from "react";
import Logo from "../assets/images/logo.svg";
import Main from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={Logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>some text</p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={Main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
