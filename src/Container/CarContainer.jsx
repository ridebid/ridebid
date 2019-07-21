import React, { Component } from "react";
import { ClockIcon, GasIcon, CarDoorIcon, SeatsIcon, BluetoothIcon } from '../Components/CarPageIcons.jsx'
import axios from 'axios';
import CarCard from './CarCard.jsx'



class CarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getAllVehicles = this.getAllVehicles.bind(this)
    this.getFakeVehicles = this.getFakeVehicles.bind(this)
  }
  
  componentDidMount() {
    document.body.style.backgroundColor='#53CAD3';
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
  getFakeVehicles() {
    this.setState({
      cars: [
        
          {
            info: {
              make: 'Tesla',
              year: 2017
            },
            location: {
              'data': {
                'latitude': 38.271888732910156,
                'longitude': -108.8855209350586
              }
            }
          }
        
      ]
    });
  }

  render() {
    const clockSize = '200px';
    return (
      <div>
        {this.state.cars.map((car) => {
          return (<div>
            <CarCard car={car} />
            </div>);
        })}
        <ClockIcon width={clockSize} height={clockSize}></ClockIcon>
        <GasIcon width={clockSize} height={clockSize} />
        <CarDoorIcon width={clockSize} height={clockSize} />
        <SeatsIcon width={clockSize} height={clockSize}/>
        <BluetoothIcon width={clockSize} height={clockSize}/>
        <button onClick={this.getAllVehicles}>hello</button>
        <button onClick={this.getFakeVehicles}>bye</button>
      </div>
    )
  }
}
export default CarContainer;
