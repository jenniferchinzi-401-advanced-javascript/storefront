// A <Products> component
// Displays a list of products associated with the selected category


import React from 'react'
import {connect} from 'react-redux'

const Products = props => {

  return (
    <section className="products">
      {props.products.displayedProducts.map(product => {
        return <li>{product.name}</li>
      })}
    </section>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(Products);