import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>wonderful day </h1>
        <p> Holy Sprit lead </p>
        <Link to="/menu">
          <button> Hallelujah</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
