import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>hello welcome </h1>
        <p> how r u </p>
        <Link to="/menu">
          <button> in the morning </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
