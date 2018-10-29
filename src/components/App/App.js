import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import HomeContainer from '../../views/Home/HomeContainer'
import CategoryContainer from '../../views/Category/CategoryContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Fragment>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/category/:name" component={CategoryContainer} />
          </Fragment>
        </div>
      </Router>
    );
  }
}

export default App;
