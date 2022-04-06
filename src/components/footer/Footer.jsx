import React from 'react';
import './Footer.css';
import logo from "../../Image/winter.png";
import {FaGithub} from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import {FaLinkedin} from 'react-icons/fa';
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";





const Footer = () => {
    return (
      <div>
        <div className="footer">
          <div className="container">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="contact">
              <p>Connect with us</p>
              <div className="iconcs">
                <h2><FaGithub /></h2>
                <h2><FaInstagram /></h2>
                <h2><FaTelegram /></h2>
                <h2><FaLinkedin /></h2>
                <h2><FaFacebook /></h2>
               
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="boxes">
              <div className="box">
                <h3>Featured Capabilities</h3>
                <p>A/B testing</p>
                <p>
                  Abandonment <br /> recovery
                </p>
                <p>Customer insights</p>
                <p>
                  Customer polling
                  <br /> and feedback
                </p>
                <p>Customer segmentation</p>
                <p>Data collection</p>
                <p>
                  Ecommerce
                  <br /> merchandising
                </p>
              </div>

              <div className="box">
                <h3>Featured Capabilities</h3>
                <p>Custom machine learning</p>
                <p>Journey Personalization</p>
                <p>Mobile app personalization</p>
                <p>Cross-channel personalization</p>
                <p>Social proofing</p>
                <p>Website personalization</p>
              </div>

              <div className="box">
                <h3>Products</h3>
                <p>1:1 Product recommendations</p>
                <p>1:1 Product badging</p>
                <p>1:1 Journey personalization</p>
                <p>Personalized content</p>
                <p>Product insights</p>
              </div>

              <div className="box">
                <h3>Resources</h3>
                <p>Resources</p>
                <p>Customers</p>
                <p>Qubit Blog.</p>
                <p>Company</p>
              </div>

              <div className="box">
                <h3>Company</h3>
                <p>Why Qubit?</p>
                <p>About us</p>
                <p>Careers</p>
                <p>Press</p>
              </div>

              <div className="box">
                <h3>Working with us</h3>
                <p>Working with us</p>
              </div>
            </div>
          </div>
        </footer>

        <div className="footer-end">
          <h1>Qubit</h1>
          <p>© 2021 Qubit. All rights reserved.</p>
        </div>
      </div>
    );
};

export default Footer;