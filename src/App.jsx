import React from "react";
import { render } from "react-dom";
import DateContainer from "./Container/DateContainer.jsx";

import { Router, Link } from "@reach/router";

const App = ({ children }) => (
  <div>
    <nav>
      <Link to="/">Home</Link> <Link to="/date">Dashboard</Link>
    </nav>
    <Router>
      <Home path="/" />
      <DateContainer path="/date" />
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashb</h2>
  </div>
);

export default App;

// import React, { Component } from 'react';
// import axios from 'axios';
// // import { Route, Router, Switch } from 'react-router-dom'
// import { Router, Link } from '@reach/router'
// // components...
// import HomeContainer from './Container/HomeContainer';
// import DateContainer from './Container/DateContainer';
// // import Cred from './components/Cred'

// const My404 = () => {
//   return (
//     <div>
//       Error! 404!!
//     </div>
//   )
// }

// const App = () => {
//   return (

//     <div>
//       <Router>
//         <DateContainer path="/" />
//         <HomeContainer path="/home" />
//         <Route component={My404} />
//       </Router>
//     </div>

//   );
// }

// export default App;

// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {};
// //   }

// //   componentDidMount() {}

// //   render() {
// //     return (
// //       <div>
// //         <h1>hello </h1>
// //         <Cred />
// //       </div>
// //     );
// //   }
// // }

// // export default App;
