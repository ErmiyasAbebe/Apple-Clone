import React, { Component } from "react";

import "./commonResource/css/styles.css";
import "./commonResource/css/bootstrap.css";
import Main from "./Components/Main/Main";
// Pages
import Mac from "./Components/Pages/Mac/Mac";
import Iphone from "./Components/Pages/Iphone/Iphone";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Watch from "./Components/Pages/Watch/Watch";
import TV from "./Components/Pages/TV/TV";
import Music from "./Components/Pages/Music/Music";
import Support from "./Components/Pages/Support/Support";
import Cart from "./Components/Pages/Cart/Cart";
import Four04 from "./Components/Pages/Four04/Four04";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/Pages/SharedLayout";
import SingleProductPage from "./Components/Pages/SingleProductPage/SingleProductPage";


class App extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
              <Route path="/" element={<Main />} />
              <Route path="Mac" element={<Mac />} />
              <Route path="Iphone" element={<Iphone />} />
              <Route path="Iphone/:productID" element={<SingleProductPage/>} />
              <Route path="Ipad" element={<Ipad />} />
              <Route path="Watch" element={<Watch />} />
              <Route path="TV" element={<TV />} />
              <Route path="Music" element={<Music />} />
              <Route path="Support" element={<Support />} />
              <Route path="Cart" element={<Cart />} />
              <Route path="*" element={<Four04 />} />
          </Route>
        </Routes>
    );
  }
}

export default App;
