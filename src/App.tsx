import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Signin from './components/SignIn';
import Signup from './components/Signup';
import Confirm from './components/Confirmation'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/confirm" component={Confirm} />
      </Router>
    </div>
  );
}

export default App;
