import React from "react";
import { Router, Link } from "@reach/router";
import { SearchBtn, CarBtn, BidBtn } from "../Components/Icons.jsx";

export default function Nav() {
return(
  <div>
    <nav>
      <div>
        <div><Link to="/">Search</Link><SearchBtn /></div>
        <div><Link to="/car">Car</Link><CarBtn /></div>
        <div><Link to="/bid">Bid</Link><BidBtn /></div>
      </div>
    </nav>
  </div>
  );
}
