import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './componen/layout/Navbar.js';
import Index from './componen/layout/Index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
        <Switch>
        <Route exact path="/" component={index} />
        </Switch>
        </div>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
