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
  navigate (event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextElement = document.activeElement.parentNode.nextSibling
      if (nextElement && nextElement.className === 'categoryLi') {
        nextElement.firstChild.focus()
      }
    }
    else if (event.key === 'ArrowUp') {
      event.preventDefault()
      const prevElement = document.activeElement.parentNode.previousSibling
      if (prevElement && prevElement.className === 'categoryLi') {
        prevElement.firstChild.focus()
      }
    }
  } 

  async componentDidMount () {
    await this.getMoreCategory()    
    
    const lastCategory = storeLocal.getLastCategory()
    this.setState({
      lastCategory
    })

    document.querySelector('a').focus()
    window.addEventListener('keydown', this.navigate)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.navigate)
  }

  async getMoreCategory () {
    const { offset } = this.state
    const data = await api.getCategories(offset)
    
    this.setState(({ categories, offset }) => ({
      categories: [...categories, ...data],
      offset: offset + 100
    }))
  }

  render () {
    return (
      <Home categories={this.state.categories} lastCategory={this.state.lastCategory} moreCat={this.getMoreCategory} />
    )
  }
}

export default HomeContainer