import React from 'react';
import "./Connected.css";
import img from "../../Image/connect.png"

const Connected = () => {
    return (
      <div>
        <div className="connected">
          <div className="container">
            <div className="box">
              <div className="box-left">
                <div className="info">
                  <h1>A connected ecosystem.</h1>
                  <p>
                    The Qubit personalization platform is designed with
                    enterprise and high-growth businesses in mind.
                  </p>
                  <p>
                    Our open ecosystem approach means you can connect any data
                    source and deliver personalization across any channel.
                  </p>

                  <button className='btn'>See our integrations</button>
                </div>
              </div>
              <div className="box-right">
                  <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Connected;