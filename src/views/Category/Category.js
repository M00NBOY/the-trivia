import React from 'react'

const Category = ({
  category: { clues, title },
  input,
  inputChange,
  checkAnswer
}) => (
  <section>
    <h3>Category page : {title}</h3>
    <h2>{clues && clues[0].question}</h2>
    
    <input
      type='text'
      value={input}
      onChange={inputChange}
      onKeyDown={checkAnswer}
    />
    
  </section>
)

export default Category