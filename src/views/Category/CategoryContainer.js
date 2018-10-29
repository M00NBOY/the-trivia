import React, { Component } from 'react';
import Category from './Category'

class CategoryContainer extends Component {
  state = {
    data: {}
  }
  componentDidMount () {
    fetch(`http://jservice.io/api/category?id=${this.props.match.params.name}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({data})
    })
  }
  render () {
    return (
      <Category category={this.state.data} />
    )
  }
}

export default CategoryContainer