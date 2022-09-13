import React from "react";
import "./App.css";
import Navibar from "./landing-page/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="app">
      <div id="app" />
      <Navibar />
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
}
