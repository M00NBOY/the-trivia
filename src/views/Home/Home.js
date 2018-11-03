import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Home = ({ categories }) => (
  <section className="homepage">
    <h2>Homepage - Category selection</h2>
    {
      categories.length > 0 && (
        <section>
          <ul>
          { categories.map(category =>
            (<li key={category.id}><Link to={`category/${category.id}`}>
              {category.title}
            </Link></li>)
          )}
          </ul>
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