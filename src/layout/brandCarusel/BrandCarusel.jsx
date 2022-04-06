
import React from 'react';
import "./brand.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../../Image/01.png"
import img2 from "../../Image/02.png"
import img3 from "../../Image/03.png";



const responsive = {
  0: { items: 1 },
  375: {item:1},
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    <img src={img1} alt=""   />
  </div>,
  <div className="item" data-value="2">
    <img src={img2} alt="" />
  </div>,
  <div className="item" data-value="3">
    <img src={img3} alt="" / >
  </div>,
  <div className="item" data-value="4">
    <img src={img1} alt="" />
  </div>,
  <div className="item" data-value="5">
    <img src={img2} alt="" />
  </div>,
  <div className="item" data-value="5">
    <img src={img3} alt="" />
  </div>,
  <div className="item" data-value="5">
    <img src={img1} alt="" />
  </div>,
];

const BrandCarusel = () => {
    return (
      <div>
        <div className="alice">
          <div className="container">
            <div className="carusel">
              <h1>Trusted by leading brands.</h1>
              <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default BrandCarusel;