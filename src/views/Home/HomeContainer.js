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
  }

  async componentDidMount () {
    await this.getMoreCategory()    
    
    /** Get the last selected category to indicate it in the list */
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


  /** 
   * Get list of categories from api
   * Array "categories" contains the categories list
   * "offset" is used in the fetch request to get the next categories list
   */
  getMoreCategory = async () => {
    const { offset } = this.state
    const data = await api.getCategories(offset)
    
    this.setState(({ categories, offset }) => ({
      categories: [...categories, ...data],
      offset: offset + 100
    }))
  }

  /**
   * Allow navigation with direction arrow up & down
   * Up button trigger focus on previous <a></a>
   * Down button trigger focus on next <a></a>
   */
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

  render () {
    return (
      <Home categories={this.state.categories} lastCategory={this.state.lastCategory} moreCat={this.getMoreCategory} />
    )
  }
}

export default HomeContainer