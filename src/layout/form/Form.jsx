import React from 'react';
import "./Form.css";
import img from "../../Image/bg.png"

const Form = () => {
    return (
      <div>

        <div className="form" style={{ backgroundImage: `url(${img})` }}>
          <h1>Book a demo today.</h1>

          <form action="">
            <input type="email" name="" id="" placeholder="Enter your email" />
            <button className='formBtn'>Book a demo</button>
          </form>
        </div>
      </div>
    );
};

export default Form;