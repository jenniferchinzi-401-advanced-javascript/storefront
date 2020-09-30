// A <Products> component
// Displays a list of products associated with the selected category


import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../../store/cart';


const Products = props => {

  return (
    <section className="products">
      {console.log('Props at Products:', props)}
      {props.products.displayedProducts.map(product => {
        return <li onClick={() => props.addToCart(product)}>{product.name}</li>
      })}
    </section>
  )
}

const mapDispatchToProps = {addToCart}

const mapStateToProps = state => ({
  products: state.products,
  cartContents: state.cart.cartContents,
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);