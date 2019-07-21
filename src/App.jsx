import React from "react";
<<<<<<< HEAD
=======
// import { render } from "react-dom";
import Nav from "./Container/Nav.jsx";
import DateContainer from "./Container/DateContainer.jsx";
import HomeContainer from "./Container/HomeContainer.jsx";
>>>>>>> j

import { Router, Link } from "@reach/router";
import DateContainer from "./Container/DateContainer.jsx";
import HomeContainer from "./Container/HomeContainer.jsx";
import BidContainer from "./Container/BidContainer.jsx";
import Nav from './Container/Nav.jsx';

function App() {
return(

  <div>
<<<<<<< HEAD
    <Nav/>
    <Router>
      <HomeContainer path="/" />
      <DateContainer path="/car" />
      <BidContainer path="/bid" />
=======
      <Nav />
    <Router>
      <DateContainer path="/search" />
      <HomeContainer path="/home" />
>>>>>>> j
    </Router>
  </div>
  );
}

export default App;
<<<<<<< HEAD
=======


// <div>
// <div><Link to="/">Search</Link></div>
// <div><Link to="/car">Car</Link></div>
// <div><Link to="/bid">Bid</Link></div>
// </div>

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
>>>>>>> j
