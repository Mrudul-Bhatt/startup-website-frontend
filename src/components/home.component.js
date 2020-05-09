import React, { Component } from "react";
import { Link } from "react-router-dom";
//import logo from "./images/bgimage.jpg";
import classes from "./stylehome.module.css";

export default class Home extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.items}>
          <div className={classes.iconWrapper}>
            <img
              src="https://pluspng.com/img-png/google-logo-png-open-2000.png"
              style={{ width: "100px" }}
              alt=""
            />
          </div>
          <div className={classes.projectName}>
            <Link to="/candidateZone">
              <p>Apply Now</p>
            </Link>
          </div>
        </div>
        <div className={classes.items}>
          <div className={classes.iconWrapper}>
            <img
              src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/social-facebook-icon.png"
              style={{ width: "100px" }}
              alt=""
            />
          </div>
          <div className={classes.projectName}>
            <Link to="/candidateZone">
              <p>Apply Now</p>
            </Link>
          </div>
        </div>
        <div className={classes.items}>
          <div className={classes.iconWrapper}>
            <img
              src="https://www.calibehr.com/img/link-logo.jpg"
              style={{ width: "100px", height: "90px" }}
              alt=""
            />
          </div>
          <div className={classes.projectName}>
            <Link to="/candidateZone">
              <p>Apply Now</p>
            </Link>
          </div>
        </div>
        <div className={classes.items}>
          <div className={classes.iconWrapper}>
            <img
              src="https://www.wipro.com/content/dam/nexus/en/brand/images/web-logo.jpg"
              style={{ width: "100px" }}
              alt=""
            />
          </div>
          <div className={classes.projectName}>
            <Link to="/candidateZone">
              <p>Apply Now</p>
            </Link>
          </div>
        </div>
        <div className={classes.items}>
          <div className={classes.iconWrapper}>
            <img
              src="https://acrobat.adobe.com/content/dam/dx-dc/images/icon-adobe-acrobat-reader-400x400.jpg.img.jpg"
              style={{ width: "100px" }}
              alt=""
            />
          </div>
          <div className={classes.projectName}>
            <Link to="/candidateZone">
              <p>Apply Now</p>
            </Link>
          </div>
        </div>
        <div className={classes.items}>
          <div className={classes.iconWrapper}>
            <img
              src="https://lh3.googleusercontent.com/F6SHkgLMR6vIfIKqs13pKKrPOkdkcACkVPougKAhI31C5XmbECB-WsTX36pRBbv-aMXQ"
              style={{ width: "100px" }}
              alt=""
            />
          </div>
          <div className={classes.projectName}>
            <Link to="/candidateZone">
              <p>Apply Now</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
/*
<div class="container">
  <div class="items">
    <div class="icon-wrapper">
      <img
        src="https://pluspng.com/img-png/google-logo-png-open-2000.png"
        style="width:100px"
      />
    </div>
    <div class="project-name">
      <p>Apply Now</p>
    </div>
  </div>
  <div class="items">
    <div class="icon-wrapper">
      <img
        src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/social-facebook-icon.png"
        style="width:100px"
      />
    </div>
    <div class="project-name">
      <p>Apply Now</p>
    </div>
  </div>
  <div class="items">
    <div class="icon-wrapper">
      <img
        src="https://www.calibehr.com/img/link-logo.jpg"
        style="width:100px; height: 90px"
      />
    </div>
    <div class="project-name">
      <p>Apply Now</p>
    </div>
  </div>
  <div class="items">
    <div class="icon-wrapper">
      <img
        src="https://www.wipro.com/content/dam/nexus/en/brand/images/web-logo.jpg"
        style="width:100px"
      />
    </div>
    <div class="project-name">
      <p>Apply Now</p>
    </div>
  </div>
  <div class="items">
    <div class="icon-wrapper">
      <img
        src="https://acrobat.adobe.com/content/dam/dx-dc/images/icon-adobe-acrobat-reader-400x400.jpg.img.jpg"
        style="width:100px"
      />
    </div>
    <div class="project-name">
      <p>Apply Now</p>
    </div>
  </div>
  <div class="items">
    <div class="icon-wrapper">
      <img
        src="https://lh3.googleusercontent.com/F6SHkgLMR6vIfIKqs13pKKrPOkdkcACkVPougKAhI31C5XmbECB-WsTX36pRBbv-aMXQ"
        style="width:100px"
      />
    </div>
    <div class="project-name">
      <p>Apply Now</p>
    </div>
  </div>
</div>;

<div className="container1">
  <img src={logo} alt="Logo" />
  <button className="btn1">
    <Link to="/candidateZone">I am a Candidate</Link>
  </button>
</div>;
*/
