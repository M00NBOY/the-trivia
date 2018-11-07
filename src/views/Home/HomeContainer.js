import React, { Component } from 'react';
import api from '../../helpers/api'
import storeLocal from '../../helpers/localstorage'
import Home from './Home.js'

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      offset: 0,
      categories: []
    }
    this.getMoreCategory = this.getMoreCategory.bind(this)
  }

  async componentDidMount () {
    const data = await api.getCategories(this.state.offset)
    this.setState((state) => ({
      categories: data,
      offset: state.offset + 100
    }))
    
    const lastCategory = storeLocal.getLastCategory()
    this.setState({
      lastCategory
    })
  }

  async getMoreCategory () {
    const data = await api.getCategories(this.state.offset)
    this.setState((state) => ({
      categories: [...state.categories, ...data],
      offset: state.offset + 100
    }))
  }

  render () {
    return (
      <Home categories={this.state.categories} lastCategory={this.state.lastCategory} moreCat={this.getMoreCategory} />
    )
  }
}

export default HomeContainer