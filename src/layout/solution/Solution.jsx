import React from 'react';
import "./solution.css";
import img1 from "../../Image/Frame 1.png";
import img2 from "../../Image/Frame 2.png";
import img3 from "../../Image/Frame 3.png";


const Solution = () => {
    return (
      <div>
        <div className="container">
          <div className="column">
            <div className="row-left">
              <h1>Grow 2.5x faster than</h1>
              <h1>your competitors.</h1>
              <div className="flex">
                <button className='btn'>Book a demo</button>
                <a href="">Meet our customers</a>
              </div>
              <p>*PwC audited methodology.</p>
              <p>Read the report</p>
            </div>
            <div className="row-right">
              <div className="item">
                <h1>140%</h1>
                <p>Qubit's top customers</p>
                <p>annual growth rate.</p>
              </div>
              <div className="item">
                <h1>9.5m</h1>
                <p>Personalized experiences</p>
                <p>delivered every hour.</p>
              </div>
              <div className="item">
                <h1>140%</h1>
                <p>Qubit's top customers</p>
                <p>annual growth rate.</p>
              </div>
              <div className="item">
                <h1>140%</h1>
                <p>Qubit's top customers</p>
                <p>annual growth rate.</p>
              </div>
              <div className="item">
                <h1>140%</h1>
                <p>Qubit's top customers</p>
                <p>annual growth rate.</p>
              </div>
              <div className="item">
                <h1>140%</h1>
                <p>Qubit's top customers</p>
                <p>annual growth rate.</p>
              </div>
            </div>
          </div>

          <div className="commerceAi">
            <h1>Qubit CommerceAI.</h1>
            <p>The new way to drive growth.</p>
            <div className="flex">
              <div className="item">
                <img src={img1} alt="" />
                <h2>More insight</h2>
                <p>
                  Learn which products drive performance and which don't,
                  through automated insights you can action.
                </p>
              </div>
              <div className="item">
                <img src={img2} alt="" />
                <h2>More personal</h2>
                <p>
                  Qubit CommerceAI generates a model per shopper to make every
                  customer interaction more relevant.
                </p>
              </div>
              <div className="item">
                <img src={img3} alt="" />
                <h2>More effective</h2>
                <p>
                  Qubit fuses data, intent, and design tools to enable your team
                  to create more effective customer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Solution;