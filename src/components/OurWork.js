import React from 'react'
import './OurWorkStyles.css'

import {Link} from 'react-router-dom'

import Toyota from '../assets/Toyota.jpeg';
import ToyotaNight from '../assets/ToyotaNight.jpeg';
import Tint1 from '../assets/tint1.jpeg';
import Tint2 from '../assets/tint2.jpeg';
import Tint3 from '../assets/tint3.jpeg'

const OurWork = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Our Work</h1>
        <p>
          Check out our previous work
        </p>
        <br></br>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={ToyotaNight} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Toyota} className="img" alt="" />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Tint1} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Tint2} className="img" alt="" />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Tint3} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Tint3} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWork