// A <Categories> component
// Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it

import React from 'react'
import {connect} from 'react-redux'
import {swapActive} from '../../store/categories'

const Categories = props => {

  return (

      <section className="category">
        {console.log('Props at Category:', props)}
        <h3>Current Category: {props.category.activeCategory.displayName}</h3>
        <ul>
          {Object.keys(props.category.categories).map(category => {
            return <li onClick={() => props.swapActive(category)}>{props.category.categories[category].displayName}</li>
          })}
        </ul>
      </section>

    )
}

const mapStateToProps = state => ({
  category: state.categories,
})

const mapDispatchToProps = {swapActive}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);