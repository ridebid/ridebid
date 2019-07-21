import React, { Component } from "react";
import { ClockIcon, GasIcon, CarDoorIcon, SeatsIcon, BluetoothIcon } from '../Components/CarPageIcons.jsx'
import axios from 'axios';

class CarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getAllVehicles = this.getAllVehicles.bind(this)
  }
  

  getAllVehicles() {
    const getOptions = {
      method: 'get'
    }
    axios('/vehicles', getOptions).then((res) => {
      console.log('hey');
      if (res && res.data.length) {
        this.setState({
          cars: res.data
        })
      } else {
        console.log('No cars');
      }
    })
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
