import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Home = ({ categories, lastCategory, moreCat }) => (
  <section className="homepage">
    <h2>Homepage - Category selection</h2>
    {
      categories.length > 0 && (
        <section>
          <ul>
          { categories.map(category =>
            (<li key={category.id}>
              <Link to={`category/${category.id}`}>
                {category.title}
              </Link>
              { String(category.id) === String(lastCategory) && (<span className="lastCatIndication">&lt; LAST CATEGORY SELECTED</span>) }
            </li>)
          )}
          </ul>
        </section>
      )
    }
    <button onClick={moreCat}>More categories</button>
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