import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/** Import views components */
import HomeContainer from '../../views/Home/HomeContainer'
import Introduction from '../../views/Introduction/Introduction'
import CategoryContainer from '../../views/Category/CategoryContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Introduction} />
          <Route path="/home" component={HomeContainer} />
          <Route path="/category/:id" component={CategoryContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
