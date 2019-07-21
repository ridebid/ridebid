import React, { Component } from "react";
import { ClockIcon, GasIcon, CarDoorIcon, SeatsIcon, BluetoothIcon } from '../Components/CarPageIcons.jsx'
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
        <GasIcon width={clockSize} height={clockSize} />
        <CarDoorIcon width={clockSize} height={clockSize} />
        <SeatsIcon width={clockSize} height={clockSize}/>
        <BluetoothIcon width={clockSize} height={clockSize}/>
        <button onClick={this.getAllVehicles}>hello</button>
      </div>
    )
  }
}
export default CarContainer;
