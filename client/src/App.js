import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing"
import Login from "./pages/Login";
import Routine from "./pages/Routine";
import Home from "./pages/Home"




function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/routine" component={Routine}/>
            <Route exact path="/home" component={Home}/>
          </div>
        </header>
        <p></p>
      </div>
    </Router>
  );
}

export default App;
