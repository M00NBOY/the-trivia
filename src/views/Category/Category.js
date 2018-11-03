import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({
  category: { clues, title },
  input,
  inputChange,
  checkAnswer
}) => (
  <section className="category">
    <Link className ="back" to="">Back to Home</Link>
    <h3>Category: {title}</h3>
    <div className="question">
      <h4>Question:</h4>
      <p>{clues && clues[0].question}</p>
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
    
  </section>
)

export default Category