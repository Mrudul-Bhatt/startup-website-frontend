import React, { Component } from "react";
//import { Link } from "react-router-dom";

/*export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase"></h5>
                <p>
                  OFFICE ADDRESS
                  <br />
                  H-55/A , Shiv Ram Park , Nangloi , New Delhi-41
                </p>
                <p>
                  EMAIL
                  <br />
                  hr@intenseplacement.com
                  <br />
                  manager@intenseplacement.com
                </p>

                <p>
                  PHONE NUMBER
                  <br />
                  7011-036-020
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3"></hr>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.linkedin.com/company/intense-placement-private-limited">
                      LinkedIn Handle
                    </a>
                  </li>
                  <li>
                    <a href="#!">Instagram Handle</a>
                  </li>
                  <li>
                    <a href="#!">Facebook Page</a>
                  </li>
                  <li>
                    <a href="#!">Twitter Handle</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2020 Copyright: Intense Placements
          </div>
        </footer>
      </div>
    );
  }
}*/

export default class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "blue" }}>
        <footer style={{ backgroundColor: "blue" }} class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <p>
                  OFFICE ADDRESS <br /> H-55/A , Shiv Ram Park , Nangloi , New
                  Delhi-41
                </p>
                <p>
                  EMAIL <br />
                  hr@intenseplacement.com | manager@intenseplacement.com
                </p>

                <p>
                  PHONE NUMBER <br /> 7011-036-020
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Connect To Us</h5>
                <ul>
                  <li>
                    <a
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                      href="https://www.linkedin.com/company/intense-placement-private-limited"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/color/48/000000/linkedin.png"
                        alt=""
                      />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/color/48/000000/instagram-new.png"
                        alt=""
                      />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/color/48/000000/facebook-new.png"
                        alt=""
                      />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/color/48/000000/twitter-circled.png"
                        alt=""
                      />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">© 2020 Intense Placements</div>
          </div>
        </footer>
      </div>
    );
  }
}
