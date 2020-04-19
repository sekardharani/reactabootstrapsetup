import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"

const App = (props) => {

  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
    </Router>
  );
}

export default App;
