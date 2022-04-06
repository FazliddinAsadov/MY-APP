import React from "react";
import Image from "../../Image/home-bg.png";
import "./homeHdinfo.css";


function HomHdinfo() {
  return (
    <div
      className="content"
      style={{
        backgroundImage: `url(${Image})`,
        width: "100%",
        // height: "90vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
       
      }}
    >
      <div className="container">
        <div className="info">
          <p>Driving growth with personalization.</p>
          <h1>Make ecommerce</h1>
          <h1>More personal.</h1>
          <p>
            Hundreds of brands use Qubit CommerceAI to power the next generation
            of product recommendations, badging and insights to build
            exceptional customer experiences.
          </p>

          <form action="">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email..."
            />
            <button type="submit" className="formBtn">Book a demo</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomHdinfo;
