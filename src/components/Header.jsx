import React from "react";
import "./Headerstyle.css";

import { FaFacebook } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";

const Header = () => {
  return (
    <div>
      <div className="nav">
        <div className="container">
          <div className="row">
            <h1> Qubit</h1>
            <ul>
              <li>
                <a to="/">Why Qubit?</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/solutions">Solutions</a>
              </li>
              <li>
                <a href="/customers">Customers</a>
              </li>
              <li>
                <a href="/case studies">Case studies</a>
              </li>
              <li>
                <a href="/resources">Resourcess</a>
              </li>
              <li>
                <a href="/more">More</a>
              </li>
            </ul>

            <div className="login">
              <a href="">Book a demo</a>
              <a href="">Login</a>
            </div>
            <GrMenu className="menu-iconc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
