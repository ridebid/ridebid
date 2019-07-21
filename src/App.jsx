import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
// components...
import HomeContainer from '../HomeContainer';
// import Cred from './components/Cred'

const My404 = () => {
  return (
    <div>
      Error! 404!!
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ HomeContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  )
}

export default App;





// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {}

//   render() {
//     return (
//       <div>
//         <h1>hello </h1>
//         <Cred />
//       </div>
//     );
//   }
// }

// export default App;
