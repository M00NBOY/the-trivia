import React, { Component } from 'react'
import api from '../../helpers/api'
import Category from './Category'
import storeLocal from '../../helpers/localstorage'

class CategoryContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: {},
      game: {
        questionIndex: 0,
        attempts: 3,
        result: null,
        score: 0
      },
      input: '',
    }
    this.inputChange = this.inputChange.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.resetCategory = this.resetCategory.bind(this)
    this.showQuestion = this.showQuestion.bind(this)
  }
  
  componentWillMount () {
    storeLocal.saveLastCategory(this.props.match.params.id)
  }

  async componentDidMount () {
    const data = await api.getCategorybyId(this.props.match.params.id)
    this.setState({
      category: data
    })

    const gameData = storeLocal.getCategoryGame(this.props.match.params.id)
    if (gameData) {
      this.setState({
        game: gameData
      })
    }
  }
  
  inputChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  checkAnswer (e) {
    if (e.which !== 13) return
    if (this.state.game.attempts < 1) {
      return
    }
    const { category: { clues } } = this.state
    console.log('answer: ', clues[this.state.game.questionIndex].answer)

    this.setState((state) => {
      if(this.state.input.toLowerCase() === clues[this.state.game.questionIndex].answer.toLowerCase()){
        return {
          input: '',
          game: {
            ...state.game,
            result: true,
            score: state.game.score + 1,
            attempts: 3,
            questionIndex: state.game.questionIndex + 1
          }
        }
      } else {
        return {
          input: '',
          game: {
            ...state.game,
            result: false,
            attempts: state.game.attempts - 1
          }
        }
      }
    }, () => {
      storeLocal.saveCategoryGame(this.state.game, this.props.match.params.id)
    })
    


  }

  resetCategory (e) {
    e.preventDefault()
    this.setState((state) => ({
      input: '',
      game: {
        ...state.game,
        result: null,
        score: 0,
        attempts: 3,
        questionIndex: 0
      }
    }), () => {
    storeLocal.saveCategoryGame(this.state.game, this.props.match.params.id)
    })
  }

  showQuestion () {
    return this.state.category.clues ? this.state.game.questionIndex < this.state.category.clues.length : null
  }

  render () {
    const { category, input, game } = this.state
    return (
      <Category
        category={category}
        input={input}
        inputChange={this.inputChange}
        checkAnswer={this.checkAnswer}
        resetCategory={this.resetCategory}
        showQuestion={this.showQuestion}
        attempts={game.attempts}
        result={game.result}
        score={game.score}
        index={game.questionIndex}
      />
    )
  }
}

export default CategoryContainer