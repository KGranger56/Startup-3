import { BrowserRouter as Router, Route } from "react-router-dom";

import Features from "../../Features/features";
import LandingPage from "../../landing-page/landingPage";
import Layout from "../../layout";
import Search from "../../search/search";
import Shop from "../../shop/shop";
import SignIn from "../../sign-in/signIn";
import SignUp from "../../sign-up/signUp";
import Blog from "./blog/blog";
import Navbar from "./navbar";

export default function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Navbar />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/features" element={<Features />} />
              <Route path="/search" element={<Search />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
            </Route>
          </Routes>
        </switch>
      </div>
    </Router>
  );
}
