import React, { Component } from 'react';
import api from '../../helpers/api'
import Category from './Category'

class CategoryContainer extends Component {
  state = {
    category: {}
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