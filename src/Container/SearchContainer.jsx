import React, { Component } from "react";

import style from './Search.module.css';
import { Navigation } from "../Components/Icons.jsx";

class SearchContainer extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="search">
        <div className="logo h3 offset-1 my-4">Logo</div>
        <div className="container">
          <div className="row">
            <div className="input-group flex-nowrap">
              <label htmlFor="searchBox">
                Where do you need your car?
              </label>
              <div className="input-group-prepend">
                <span className="bg-white"><img src="../images/navigation.png" /></span>
                <input type="text" className="form-control" id="searchBox" aria-describedby="addon-wrapping" placeholder="current location" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <label></label>
        </div>
      </div>
    )
  }
}
export default SearchContainer;


{/* <span className="input-group-text" id="addon-wrapping">hihihihih</span> */}