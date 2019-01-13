import React, { Component } from 'react'
import api from '../../helpers/api'
import Category from './Category'
import storeLocal from '../../helpers/localstorage'

class CategoryContainer extends Component {
  constructor () {
    super()
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
  }
  
  componentWillMount () {
    /** Save the category id that will be used in Home page in the categories list */
    storeLocal.saveLastCategory(this.props.match.params.id)
  }

  async componentDidMount () {
    /** Get the questions of the category from the api */
    const data = await api.getCategorybyId(this.props.match.params.id)
    this.setState({
      category: data
    })

    /** Get the previous state and score of the category questions */
    const gameData = storeLocal.getCategoryGame(this.props.match.params.id)
    if (gameData) {
      this.setState({
        game: gameData
      })
    }
  }
  
  /** Handle answer input value */
  inputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  /**
   * When the player confirm the answer input 
   * the input value is compared with the true answer
   * If the answer is correct, the next question is displayed
   * else the number of attempts decrease
  */
  checkAnswer = (e) => {
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
      /** Save the state of the game */
      storeLocal.saveCategoryGame(this.state.game, this.props.match.params.id)
    })
  }

  /** Reset the state of the category to initial */
  resetCategory = (e) => {
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

  /** Check if the player has answered to all the questions of the category */
  remainingQuestions = () => {
    return this.state.game.questionIndex < this.state.category.clues.length
  }

  /** Skip to the next question */
  nextQuestion = () => {
    console.log(this.state)
    this.setState((state) => ({
      input: '',
      game: {
        ...state.game,
        result: null,
        score: state.game.score,
        attempts: 3,
        questionIndex: state.game.questionIndex+1
      }
    }), () => {
      storeLocal.saveCategoryGame(this.state.game, this.props.match.params.id)
    })
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
        remainingQuestions={this.remainingQuestions}
        nextQuestion={this.nextQuestion}
        game={game}
      />
    )
  }
}

export default CategoryContainer