import React from 'react'
import {Link} from 'react-router-dom';
import './PricingStyles.css'

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Carbon Dyed Film -</h3>
          <span className="bar"></span>
          <p className="btc">$200</p>
          <p>- Let Dry 3 Days -</p>
          <p>- 24-48 Hrs -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Ceramic Dyed Film -</h3>
          <span className="bar"></span>
          <p className="btc">$200</p>
          <p>- Let Dry 3 Days -</p>
          <p>- 24-48 Hrs -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Ceramic Non-Dyed Film -</h3>
          <span className="bar"></span>
          <p className="btc">$200</p>
          <p>- Let Dry 3 Days -</p>
          <p>- 24-48 Hrs -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing