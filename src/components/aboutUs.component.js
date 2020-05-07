import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "./aboutus.css";
import Logo from "./images/aboutus2.jpg";

export default class AboutUs extends Component {
  render() {
    return (
      <div class="container2">
        <img className="image2" src={Logo} alt="Snow" />
        <div class="centered2">
          <h1>About Us</h1>
          <h3>
            The Right Placement Agency Our bespoke recruiting solutions use the
            right mix of technology and human intelligence to help you attract
            and hire candidates who contribute to both your business goals and
            culture. We believe in people. We believe in harnessing the human
            potential to build stellar careers.One of the largest recruitment
            agencies in the world, we help nurture the ambitions of millions
            across the world.We offer temporary and permanent workforce
            solutions to a large client base spread across industries. Choose us
            for exceptional consultancy services designed for business growth
            and operational excellence.
          </h3>
        </div>
      </div>
    );
  }
}
