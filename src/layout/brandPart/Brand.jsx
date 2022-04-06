import React from "react";
import "./brand.css";
import Img6 from "../../Image/Rectangle (6).png";
import Img7 from "../../Image/Rectangle (7).png";
import Img8 from "../../Image/Rectangle (8).png";
import Img9 from "../../Image/Rectangle (9).png";
import Img10 from "../../Image/Rectangle (10).png";
import Img11 from "../../Image/Rectangle (11).png";
import Img12 from "../../Image/Rectangle (12).png";
import Img13 from "../../Image/Rectangle (13).png";

const Brand = () => {
  return (
    <>
      <div className="container">
        <div className="brand">
          <p>Trusted by world-class brands.</p>
          <div className="brand-img">
            <img src={Img6} alt="" />
            <img src={Img7} alt="" />
            <img src={Img8} alt="" />
            <img src={Img9} alt="" />
            <img src={Img10} alt="" />
            <img src={Img11} alt="" />
            <img src={Img12} alt="" />
            <img src={Img13} alt="" />
          </div>
                <div className="meet">
                    <a href="">Meet our customers</a>
                </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
