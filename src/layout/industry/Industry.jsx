import React from "react";
import "./Industry.css";
import img1 from "../../Image/Frame (1)1.png";
import img2 from "../../Image/Frame (2)2.png";
import img3 from "../../Image/Frame (3)3.png";
import img4 from "../../Image/Frame (4)4.png";
import img5 from "../../Image/Frame (5)5.png";
import img6 from "../../Image/Frame (6)6.png";

const Industry = () => {
  return (
    <div>
      <div className="industry">
        <div className="container">
          <div className="title">
            <h1>We specialize in your industry.</h1>
            <p>
              Learn how we are delivering personalization at scale across
              sectors.
            </p>
          </div>

          <div className="items">
            <div className="content">
              <div className="item">
                <div className="flex">
                  <img src={img1} alt="" />
                  <h3>Beauty and cosmetics</h3>
                </div>
                <p>
                  Discover relevant products. Push samples. Upsell and
                  replenish.
                </p>
                <p>Explore our solutions for beauty and cosmetics.</p>
                <div className="line"></div>
              </div>
            </div>
            <div className="content">
              <div className="item">
                <div className="flex">
                  <img src={img2} alt="" />
                  <h3>Beauty and cosmetics</h3>
                </div>
                <p>
                  Discover relevant products. Push samples. Upsell and
                  replenish.
                </p>
                <p>Explore our solutions for beauty and cosmetics.</p>
                <div className="line"></div>
              </div>
            </div>
            <div className="content">
              <div className="item">
                <div className="flex">
                  <img src={img3} alt="" />
                  <h3>Beauty and cosmetics</h3>
                </div>
                <p>
                  Discover relevant products. Push samples. Upsell and
                  replenish.
                </p>
                <p>Explore our solutions for beauty and cosmetics.</p>
                <div className="line"></div>
              </div>
            </div>
            <div className="content">
              <div className="item">
                <div className="flex">
                  <img src={img4} alt="" />
                  <h3>Beauty and cosmetics</h3>
                </div>
                <p>
                  Discover relevant products. Push samples. Upsell and
                  replenish.
                </p>
                <p>Explore our solutions for beauty and cosmetics.</p>
                <div className="line"></div>
              </div>
            </div>
            <div className="content">
              <div className="item">
                <div className="flex">
                  <img src={img5} alt="" />
                  <h3>Beauty and cosmetics</h3>
                </div>
                <p>
                  Discover relevant products. Push samples. Upsell and
                  replenish.
                </p>
                <p>Explore our solutions for beauty and cosmetics.</p>
                <div className="line"></div>
              </div>
            </div>
            <div className="content">
              <div className="item">
                <div className="flex">
                  <img src={img6} alt="" />
                  <h3>Beauty and cosmetics</h3>
                </div>
                <p>
                  Discover relevant products. Push samples. Upsell and
                  replenish.
                </p>
                <p>Explore our solutions for beauty and cosmetics.</p>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
