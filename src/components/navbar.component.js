import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./navbar.css";

/*export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          IntensePlacements
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/aboutUs" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/employerZone" className="nav-link">
                Employers Zone
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/partnerZone" className="nav-link">
                Partners Zone
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/candidateZone" className="nav-link">
                Candidate Zone
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contactUs" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}*/

export default class Navbar extends Component {
  render() {
    return (
      <nav
        style={{
          color: "grey",
          backgroundColor: "blue",
        }}
      >
        <div className="nav-wrapper">
          {/*<Link to="/" className="brand-logo">
            IntensePlacements
          </Link>*/}
          <img className="fit" src={logo} alt="company logo" />
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/"
            className="brand-logo"
          >
            Intense Placements
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
                to="/aboutUs"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
                to="/employerZone"
              >
                Employers Zone
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
                to="/partnerZone"
              >
                Partners Zone
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
                to="/candidateZone"
              >
                Candidate Zone
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
                to="/contactUs"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
