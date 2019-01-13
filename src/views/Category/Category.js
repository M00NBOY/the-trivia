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
    <Link className ="back" to="/home">BACK</Link>
    <p className="score">Score: {game.score}{clues && !remainingQuestions() && (<span>/{clues.length}</span>)}</p>
    <h3>[CATEGORY: {title}]</h3>
    { clues && remainingQuestions() && (
      <div>
        <div className="question">
          <h4>&#60; Question #{game.questionIndex+1} &#62;</h4>
          <p>{clues && clues[game.questionIndex].question}</p>
        </div>
        {game.attempts !== 0 && (
        <div className="answer">
          <span>
            <input
              id="answer"
              className="answerInput"
              type='text'
              placeholder="Type your answer"
              value={input}
              onChange={inputChange}
              onKeyDown={checkAnswer}
              autocomplete="off"
            />
          </span>
        </div>
        )}
        { game.result !== null &&
          (<div>
            <p className="answerResult">{
              game.result ? "" : "Wrong answer, " + (game.attempts !== 0 ? `${game.attempts} attempts left` : "attempts left: 0 >>> The right answer was: " + clues[game.questionIndex].answer + " <<<<") 
            }</p>
          </div>)
        }
        <button className="nextQuestion" onClick={nextQuestion}>NEXT QUESTION</button>
      </div>
    )}
    {
      clues && !remainingQuestions() && (
        <div className="result">
          <p>
            { game.score > clues.length/2 && ("Well done!") }
            { game.score < clues.length/2 && ("You suck") }
          </p>
          
        </div>
      )
    }
    { game.questionIndex > 0 && (<button className="reset" onClick={resetCategory}>RESET SCORE</button>)}
  </section>
)

export default Category