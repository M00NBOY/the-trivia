import React, { Component } from 'react'
import api from '../../helpers/api'
import Category from './Category'
import storeLocal from '../../helpers/localstorage'

class CategoryContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: {},
      questionIndex: 0,
      input: '',
      attempts: 3,
      result: null,
      score: 0
    }
    this.inputChange = this.inputChange.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.resetCategory = this.resetCategory.bind(this)
    this.showQuestion = this.showQuestion.bind(this)
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
    console.log(this.state.category.clues.length)
  }
  
  inputChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  checkAnswer (e) {
    if (e.which !== 13) return
    if (this.state.attempts < 1) {
      return
    }
    const { category: { clues } } = this.state
    console.log('answer: ', clues[this.state.questionIndex].answer)
    if(this.state.input.toLowerCase() === clues[this.state.questionIndex].answer.toLowerCase()){
      this.setState((state) => ({
        result: true,
        input: '',
        score: state.score + state.attempts,
        attempts: 3,
        questionIndex: state.questionIndex + 1
      }))
      console.log(this.state.questionIndex)
    } else {
      this.setState((state) => ({
        result: false,
        input: '',
        attempts: state.attempts - 1
      }))
    }
  }

  resetCategory (e) {
    e.preventDefault()
    this.setState((state) => ({
      result: null,
      input: '',
      score: 0,
      attempts: 3,
      questionIndex: 0
    }))
  }

  showQuestion () {
    return this.state.category.clues ? this.state.questionIndex < this.state.category.clues.length : null
  }

  render () {
    const { category, input, attempts, result, score, questionIndex } = this.state
    return (
      <Category
        category={category}
        input={input}
        inputChange={this.inputChange}
        checkAnswer={this.checkAnswer}
        resetCategory={this.resetCategory}
        attempts={attempts}
        result={result}
        score={score}
        index={questionIndex}
        showQuestion={this.showQuestion}
      />
    )
  }
}

export default CategoryContainer