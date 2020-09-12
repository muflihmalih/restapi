// import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!</h1>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Login from "./container/login";
import Signup from "./container/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </Router>
  );
};
export default App;
