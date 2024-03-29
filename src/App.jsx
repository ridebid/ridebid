import React from "react";

import { Router, Link } from "@reach/router";
import CarContainer from "./Container/CarContainer.jsx";
import SearchContainer from "./Container/SearchContainer.jsx";
import BidContainer from "./Container/BidContainer.jsx";
import Nav from './Container/Nav.jsx';

function App() {
  return(
    <div>
      <Router>
        <SearchContainer path="/" />
        <CarContainer path="/car" />
        <BidContainer path="/bid" />
      </Router>
      <Nav/>
    </div>
  );
}

export default App;
