// A <Categories> component
// Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it

import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {swapActive, getCategories} from '../../store/categories'

const Categories = props => {

  useEffect(() => {
    props.getCategories();
  }, [])

  return (

      <section className="category">
        {console.log('Props at Category:', props)}
        <h3>Current Category: {props.category.activeCategory.name}</h3>
        <ul>
          {Object.keys(props.category.categories).map(category => {
            return <li onClick={() => props.swapActive(props.category.categories[category])}>{props.category.categories[category].name}</li>
          })}
        </ul>
      </section>

    )
}

const mapStateToProps = state => ({
  category: state.categories,
})

const mapDispatchToProps = {swapActive, getCategories}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);