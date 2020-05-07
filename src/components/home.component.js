import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/bgimage.jpg";
import "./stylehome.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container1">
        <img src={logo} alt="Logo" />
        <button className="btn1">
          <Link to="/candidateZone">I am a Candidate</Link>
        </button>
      </div>
    );
  }
}
