import React from "react";
// import { render } from "react-dom";
import DateContainer from "./Container/DateContainer.jsx";
import HomeContainer from "./Container/HomeContainer.jsx";

import { Router, Link } from "@reach/router";

function App() {
return(

  <div>
    <nav>
      <div>
        <div><Link to="/">Search</Link></div>
        <div><Link to="/date">Car</Link></div>
        <div><Link to="/account">Bid</Link></div>
      </div>
    </nav>
    <Router>
      <HomeContainer path="/" />
      <DateContainer path="/date" />
    </Router>
  </div>
  );
}

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
