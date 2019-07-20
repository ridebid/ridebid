import React, { Component } from 'react';
import axios from 'axios';

import Cred from './Cred'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>hello </h1>
        <Cred />
      </div>
    );
  }
}

export default App;
