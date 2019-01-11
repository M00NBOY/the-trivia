import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({
  category: { clues, title },
  input,
  inputChange,
  checkAnswer,
  game,
  remainingQuestions,
  resetCategory,
  nextQuestion
}) => (
  <section className="category crt">
    <Link className ="back" to="">HOME</Link>
    <h3>[CATEGORY: {title}]</h3>
    <p className="score">Score: {game.score}{clues && !remainingQuestions() && (<span>/{clues.length}</span>)}</p>
    { clues && remainingQuestions() && (
      <div>
        <div className="question">
          <h4>&#60; Question #{game.questionIndex+1} &#62;</h4>
          <p>{clues && clues[game.questionIndex].question}</p>
        </div>
        {game.attempts !== 0 && (
        <div className="answer">
          {/* <label htmlFor="answer">Your answer: </label> */}
          <span>
            <input
              id="answer"
              className="answerInput"
              type='text'
              placeholder="Type your answer"
              value={input}
              onChange={inputChange}
              onKeyDown={checkAnswer}
            />
          </span>
        </div>
        )}
        { game.result !== null &&
          (<div>
            <p className="answergame">{
              game.result ? "" : "Wrong answer, " + (game.attempts !== 0 ? `${game.attempts} attempts left` : "attempts left: 0 >>> Good answer: " + clues[game.questionIndex].answer + " <<<<") 
            }</p>
          </div>)
        }
        <button className="nextQuestion" onClick={nextQuestion}>Next question</button>
      </div>
    )}
    {
      clues && !remainingQuestions() && (
        <div className="result">
          <p>
            { game.score > clues.length/2 && ("Well played!") }
            { game.score < clues.length/2 && ("You suck") }
          </p>
          
        </div>
      )
    }
    { game.questionIndex > 0 && (<button className="reset" onClick={resetCategory}>Reset</button>)}
  </section>
)

export default Category