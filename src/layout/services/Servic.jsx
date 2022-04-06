import React from 'react';
import "./servic.css";
import img1 from "../../Image/Frame (1).png";
import img2 from "../../Image/Frame (2).png";
import img3 from "../../Image/Frame (3).png";
import img4 from "../../Image/Frame (4).png";
import img5 from "../../Image/Frame (5).png";
import img6 from "../../Image/Frame (6).png";


const Servic = () => {
    return (
      <div>
        <div className="container">
          <div className="servic">
            <h1>What you can do with Qubit.</h1>
            <div className="boxes">
              <div className="box">
                <img src={img1} alt="" />
                <h3>1:1 Product recommendations</h3>
                <p>
                  Use deep learning recommendations to engage customers in
                  seconds.
                </p>
              </div>
              <div className="box">
                <img src={img2} alt="" />
                <h3>1:1 Product badging</h3>
                <p>
                  Guide discovery with personalized product badging. Push sales
                  with social proofing.
                </p>
              </div>
              <div className="box">
                <img src={img3} alt="" />
                <h3>Personalized content</h3>
                <p>
                  Your customers are unique. Present them with content that
                  shows you know them.
                </p>
              </div>
              <div className="box">
                <img src={img4} alt="" />
                <h3>Product insights</h3>
                <p>
                  A platform packed with insights helping you discover the hard
                  hitting things you can do next.
                </p>
              </div>
              <div className="box">
                <img src={img5} alt="" />
                <h3>CommerceAI</h3>
                <p>
                  Your customer's behavioral data is telling you a story. Use
                  predictive and affinity based algorithms to serve them better.
                </p>
              </div>
              <div className="box">
                <img src={img6} alt="" />
                <h3>Platform integrations</h3>
                <p>
                  Connect Qubit to any tool via API. Import data or trigger an
                  experience on any platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Servic;