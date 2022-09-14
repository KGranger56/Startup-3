import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";

import Features from "./Features/features";
import LandingPage from "./landing-page/landingPage";
import Search from "./search/search";
import Shop from "./shop/shop";
import SignIn from "./sign-in/signIn";
import SignUp from "./sign-up/signUp";
import Blog from "./blog/blog";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/landingPage" element={<LandingPage />} exact />
            <Route path="/features" element={<Features />} />
            <Route path="/search" element={<Search />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
