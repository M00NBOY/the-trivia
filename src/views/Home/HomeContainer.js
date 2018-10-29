import React, { Component } from 'react';
import Home from './Home.js'

class HomeContainer extends Component {
  state = {
    categories: []
  }

  componentDidMount () {
    fetch("http://jservice.io/api/categories?count=100")
    .then(response => response.json())
    .then(data => {
      this.setState({categories: data})
    })
  }

  render () {
    return (
      <Home categories={this.state.categories} />
    )
  }
}

export default HomeContainer