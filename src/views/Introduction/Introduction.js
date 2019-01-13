import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/** Introduction text to insert */
const text = 'Click here to start!'

class Introduction extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    this.displayText()
  }

  /**
   * Trigger text apparition
   * Count is the number of letter displayed
   * Count is incremented with setTimeout
   */
  displayText() {
    for (let i = 0; i <= text.length; i++) {
      setTimeout(_ => {
        this.setState(prevState => ({'count' : prevState.count + 1}))
      }, i * 200 + (Math.random() * 100)) 

    }
  }

  render () {
    const { count } = this.state

    return (
      <section className="introduction crt">
        <Link to="home" className='introductionLink'>
          {text.substring(0, count)}
        </Link>
      </section>
    )
  }
}


export default Introduction