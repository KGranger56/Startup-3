import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="landing-body">
        <h1 className="landing-h1">Startup Framework</h1>
        <p className="landing-info">
          We made it so beautiful and simple. It combines <br />
          landings, pages, blogs, and shop screens. It is definitely <br />
          the tool you need in your collection!
        </p>
        <button className="purchase">Purchase Now for $248</button>
        <p className="learn-more">Learn More</p>
      </div>
    </div>
  );
};

export default LandingPage;
