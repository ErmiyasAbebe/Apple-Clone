import React, { Component } from "react";
import HeaderLink from "./HeaderLink/HeaderLink";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} alt="apple logo" />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderLink linkName="Mac" linkUrl="/Mac" />
                <HeaderLink linkName="iphone" linkUrl="/iphone" />
                <HeaderLink linkName="ipad" linkUrl="/ipad" />
                <HeaderLink linkName="watch" linkUrl="/watch" />
                <HeaderLink linkName="tv" linkUrl="/tv" />
                <HeaderLink linkName="Music" linkUrl="/Music" />
                <HeaderLink linkName="Support" linkUrl="/support" />

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={search} alt="search logo" />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart/">
                    <img src={cart} alt="cart logo" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
