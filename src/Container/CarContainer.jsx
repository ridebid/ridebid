import React, { Component } from "react";
import { ClockIcon } from '../Components/CarPageIcons.jsx'

class CarContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const clockSize = '200px'
    return (
      <div>this is CAR!!
        <ClockIcon width={clockSize} height={clockSize}></ClockIcon>
      </div>
    )
  }
}
export default CarContainer;
