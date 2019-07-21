import React, { Component } from 'react';

class Cred extends Component {
  constructor(){
    super()
    this.state = {
      cars1: {
        make: 'tesla',
        vin: 'a1234',
        color: 'blue',
        location: 'street name'
      }
    }
  }


  render(){

    return(
      <div>
        <div>{this.state.cars1.make}</div>
      </div>
    )
  }
}
export default Cred
