import React from "react";

import { Router, Link } from "@reach/router";

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
}
