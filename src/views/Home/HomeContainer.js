import React, { Component } from 'react';
import api from '../../helpers/api'
import Home from './Home.js'

class HomeContainer extends Component {
  state = {
    categories: []
  }

  async componentDidMount () {
    const data = await api.getCategories()
    this.setState({
      categories: data
    })
  }

  render () {
    return (
      <Home categories={this.state.categories} />
    )
  }
}

export default HomeContainer