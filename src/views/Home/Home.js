import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Home = ({ categories }) => (
  <section>
    <h2>Homepage</h2>
    {
      categories.length > 0 && (
        <section>
          { categories.map(category =>
            (<Link to={`category/${category.id}`} key={category.id}>
              <button>{category.title}</button>
            </Link>)
          )}
        </section>
      )
    }
  </section>
)

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    })
  )
}

export default Home