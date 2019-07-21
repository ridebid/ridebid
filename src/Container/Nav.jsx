import React from "react";
import { Router, Link } from "@reach/router";
import { SearchBtn, CarBtn, BidBtn } from "../Components/Icons.jsx";

export default function Nav() {
return(
  <div className="container">
    <nav className="row">
      <div className="nav col-10 offset-1 justify-content-center">
        <div className="nav-link px-5">
          <Link to="/">
            <div className="container text-center">
                <div><SearchBtn /></div>
                <div>Search</div>
            </div>
          </Link>
        </div>
        <div className="nav-link px-5">
          <Link to="/car">
            <div className="container text-center">
              <div><CarBtn /></div>
              <div>Car</div>
            </div>
          </Link>
        </div>
        <div className="nav-link px-5">
          <Link to="/bid">
            <div className="container text-center">
              <div><BidBtn /></div>
              <div>Bid</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  </div>
  );
}
