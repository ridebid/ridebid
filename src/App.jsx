import React from "react";

import { Router, Link } from "@reach/router";
import DateContainer from "./Container/DateContainer.jsx";
import HomeContainer from "./Container/HomeContainer.jsx";
import BidContainer from "./Container/BidContainer.jsx";
import Nav from './Container/Nav.jsx';

function App() {
return(

  <div>
    <Nav/>
    <Router>
      <HomeContainer path="/" />
      <DateContainer path="/car" />
      <BidContainer path="/bid" />
    </Router>
  </div>
  );
}

export default App;
