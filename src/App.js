/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import CandidateZone from "./components/candidateZone.component";
import Home from "./components/home.component";
import EmployerZone from "./components/employerZone.component";
import PartnerZone from "./components/partnerZone.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/employerZone" component={EmployerZone} />
        <Route path="/partnerZone" component={PartnerZone} />
        <Route path="/candidateZone" component={CandidateZone} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
