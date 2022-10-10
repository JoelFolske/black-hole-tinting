import React from "react";
import { Link } from "react-router-dom";
import "./PricingStyles.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Premium Dyed Film -</h3>
          <span className="bar"></span>
          <h3>Starting at:</h3>
          <p className="btc">$200</p>
          <p>- Added Privacy -</p>
          <p>- Less Glare -</p>
          <p>- 99% Blockage of UV Rays -</p>
          <p>- Peace of Mind -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Carbon Film -</h3>
          <span className="bar"></span>
          <h3>Starting at:</h3>

          <p className="btc">$250</p>
          <p>- Glare Rejection -</p>
          <p>- UV Rejection -</p>
          <p>- A and B Rejection -</p>
          <p>- Added Privacy -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Ceramic Film -</h3>
          <span className="bar"></span>
          <h3>Starting at:</h3>

          <p className="btc">$200</p>
          <p>- Reduces Sun Glare -</p>
          <p>- Blocks 50% of Light -</p>
          <p>- Private Quarters -</p>
          <p>- UV Blocking Protection -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Non-Dyed Ceramic -</h3>
          <span className="bar"></span>
          <h3>Starting at:</h3>

          <p className="btc">$200</p>
          <p>- Non-Conductive (To Heat) -</p>
          <p>- Structural Stability -</p>
          <p>- Greatest Visibility -</p>
          <p>- 85% Heat Reduction -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Ceramic Coating -</h3>
          <span className="bar"></span>
          <h3>Starting at:</h3>

          <p className="btc">$200</p>
          <p>- Protect Paint From Oxidizing -</p>
          <p>- Lasts 2 - 5 Years -</p>
          <p>- Repels Dirt And Mud -</p>
          <p>- Paint is More Durable -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
