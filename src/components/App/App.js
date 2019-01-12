import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import HomeContainer from '../../views/Home/HomeContainer'
import Introduction from '../../views/Introduction/Introduction'
import CategoryContainer from '../../views/Category/CategoryContainer'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Fragment>
          <Route path="/" exact component={Introduction} />
          <Route path="/category/:id" component={CategoryContainer} />
          <Route path="/home" component={HomeContainer} />
        </Fragment>
      </div>
      </Router>
    );
  }
}

export default App;
