<<<<<<< HEAD
import React from "react";
=======
import React, { Component } from "react";
import { Router, Link } from "@reach/router";
>>>>>>> j

import { Router, Link } from "@reach/router";

<<<<<<< HEAD
export default function Nav() {
return(
  <div>
    <nav>
      <div>
        <div><Link to="/">Search</Link></div>
        <div><Link to="/car">Car</Link></div>
        <div><Link to="/bid">Bid</Link></div>
      </div>
    </nav>
  </div>
  );
=======
class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        <div>
          <nav>
            <Link to="/">Search</Link>
            <Link to="/car">Car</Link>
            <Link to="/bid">Bid</Link>
          </nav>
        </div>
        )
    }
>>>>>>> j
}
