import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Home = ({ categories, lastCategory, moreCat }) => (
  <section className="homepage crt">
    <h2>SELECT YOUR CATEGORY</h2>
    {
      categories.length > 0 && (
        <section>
          <ul>
          { categories.map((category, i) =>
            (<li key={category.id} className='categoryLi'>
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
    <button className="moreCatButton" onClick={moreCat}>SHOW ME MORE</button>
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