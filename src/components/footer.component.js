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
      <div>
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                {/*<h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">
                  You can use rows and columns here to organize your footer
                  content.
    </p>*/}
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
                    <a href="https://www.linkedin.com/company/intense-placement-private-limited">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
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
