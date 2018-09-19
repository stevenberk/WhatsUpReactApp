import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateForm from './FormComponent';
import APIOutput from './APIOutput'; 

const BasicExample = () => (
  <Router>
    <div>
      <h1>
        Whats up
      </h1>
      <CreateForm/>
      <ul>
        <li>
          <Link to="/whatsups">Whats ups</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />

      <Route path="/whatsups" component={WhatsupsDisplay} />
      <Route path="/about" component={AboutDisplay} />
      <Route path="/otherstuff" component={OtherPage} />
    </div>
  </Router>
);



const OtherPage = () => (
  <div>
    <h2>
      welcome to the other page
    </h2>
    <Link to="/whatsups">Whats ups</Link>
  </div>
);

const WhatsupsDisplay = () => (
  <div>
    <APIOutput/>
  </div>
);

const AboutDisplay = () => (
  <div>
    <h2>About</h2>
    <h3>copy + paste from react training </h3>
    <Link to="/whatsups">Whats ups</Link>
    <h4>
    <Link to="/otherstuff">Other Stuff</Link>
    </h4>
  </div>
);


export default BasicExample;