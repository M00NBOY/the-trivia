import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({
  category: { clues, title },
  input,
  inputChange,
  checkAnswer,
  attempts,
  result,
  score,
  index,
  showQuestion,
  resetCategory
}) => (
  <section className="category">
    <Link className ="back" to="">Back to Home</Link>
    <h3>Category: {title}</h3>
    <p className="score">Score: {score}</p>
    { showQuestion() && (
      <div>
        <div className="question">
          <h4>Question #{index+1}</h4>
          <p>{clues && clues[index].question}</p>
        </div>
        <div className="answer">
          <p>Your answer:</p>
          <input
            className="answerInput"
            type='text'
            value={input}
            onChange={inputChange}
            onKeyDown={checkAnswer}
          />
          <span className="answerDisplay">{input}</span>
        </div>
        { result !== null &&
          (<div>
            <p className="answerResult">{
              result ? "" : "WRONG!! " + (attempts !== 0 ? `${attempts} ATTEMPTS LEFT` : "GAME OVER") 
            }</p>
          </div>)
        }
      </div>
    )}
    <a className="reset" href="#" onClick={resetCategory}>Reset</a>
  </section>
)

export default Category