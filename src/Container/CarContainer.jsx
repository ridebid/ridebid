import React, { Component } from "react";
import { ClockIcon } from '../Components/CarPageIcons.jsx'
import axios from 'axios';

class CarContainer extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const clockSize = '200px'
    return (
      <div>this is CAR!!
        <ClockIcon width={clockSize} height={clockSize}></ClockIcon>
        <button onClick={this.getAllVehicles}>hello</button>
      </div>
    )
  }
}
export default CarContainer;
