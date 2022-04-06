import React from 'react';
import "./compaign.css";
import Img  from "../../Image/comp.png";

const Compaign = () => {
    return (
      <div>
        <div className="compaign">
          <div className="container">
            <h1>All the power. Easy to use.</h1>
            <p>
              By collaborating with real ecommerce teams we've built the
              next-gen personalization tool. No code. No clunkiness.
            </p>

            <div className="box">
              <div className="container">
                <img src={Img} alt="" />
              </div>
            </div>

            <button className='btn'>See products</button>
            <button className='btn' >Book a demo</button>
          </div>
        </div>
      </div>
    );
};

export default Compaign;