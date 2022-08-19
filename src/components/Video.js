import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import headervid from "../assets/headervid.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={headervid} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Revolutionary</h1>
        <p>World's greatest tint shop ever</p>
        <br></br>
        <div>
          <Link to="/ourwork" className="btn">Our Work</Link>
          <Link to="/Contact" className="btn">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
