import React, { Component } from 'react'
import api from '../../helpers/api'
import Category from './Category'
import storeLocal from '../../helpers/localstorage'

class CategoryContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: {},
      input: ''
    }
    this.inputChange = this.inputChange.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
  }
  
  componentWillMount () {
    storeLocal.saveCategory(this.props.match.params.id)
    console.log(storeLocal.getCategory())
  }
  async componentDidMount () {
    const data = await api.getCategorybyId(this.props.match.params.id)
    this.setState({
      category: data
    })
  }
  
  inputChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  checkAnswer (e) {
    if (e.which !== 13) return
    const { category: { clues } } = this.state

    console.log('CHECK >', e.target.value)
    console.log('answer = ', clues[0].answer)
    if(this.state.input.toLowerCase() === clues[0].answer.toLowerCase() ){
      console.log('gagné')
    } else {
      console.log('prouuuuut')
    }
  }

  render () {
    const { category, input } = this.state
    return (
      <Category
        category={category}
        input={input}
        inputChange={this.inputChange}
        checkAnswer={this.checkAnswer}
      />
    )
  }
}

export default CategoryContainer