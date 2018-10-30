import React, { Component } from 'react'
import api from '../../helpers/api'
import Category from './Category'
import storeLocal from '../../helpers/localstorage'

class CategoryContainer extends Component {
  state = {
    category: {}
  }
  componentWillMount () {
    storeLocal.saveCategory(this.props.match.params.name)
    console.log(storeLocal.getCategory())
  }
  async componentDidMount () {
    const data = await api.getCategorybyId(this.props.match.params.name)
    this.setState({
      category: data
    })
  }
  render () {
    return (
      <Category category={this.state.category} />
    )
  }
}

export default CategoryContainer