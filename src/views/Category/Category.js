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
          <label htmlFor="answer">Your answer: </label>
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
        { result !== null &&
          (<div>
            <p className="answerResult">{
              result ? "" : "WRONG!! " + (attempts !== 0 ? `${attempts} ATTEMPTS LEFT` : "GAME OVER") 
            }</p>
          </div>)
        }
      </div>
    )}
    <button className="reset" onClick={resetCategory}>Reset</button>
  </section>
)

export default Category