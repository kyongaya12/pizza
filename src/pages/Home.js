import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Hadong kimchee </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> new order one to test now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
