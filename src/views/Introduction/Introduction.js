import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const text = 'Click me to start!'

class Introduction extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      input: 'oui'
    }
  }

  componentDidMount() {
    this.displayText()
  }

  displayText() {
    const { count } = this.state
    for (let i = 0; i <= text.length; i++) {

      setTimeout(_ => {
        console.log(count)
        this.setState(prevState => {
          console.log(prevState.count)
          return { 'count' : prevState.count + 1 }
        })
      }, i * 200 + (Math.random() * 100)) 

    }
  }

  render () {
    const { count, input } = this.state

    return (
      <section className="introduction">
        <Link to="home" className='introductionLink'>
            {text.substring(0, count)}
        </Link>
        {/* {count === text.length + 1 && (
          <div className="introductionInput">
            {input}
          </div>
        )} */}
      </section>
    )
  }
}


export default Introduction