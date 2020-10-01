// A <Products> component
// Displays a list of products associated with the selected category


import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../../store/products'
import {addToCart} from '../../store/cart';


const Products = props => {

  useEffect(() => {
    props.getProducts();
  }, [])

  return (
    <section className="products">
      {props.products.displayedProducts.map(product => {
        console.log('Product for Cart', product);
        return <li onClick={() => props.addToCart(product)}>{product.name}</li>
      })}
    </section>
  )
}

const mapDispatchToProps = {addToCart, getProducts}

const mapStateToProps = state => ({
  products: state.products,
  cartContents: state.cart.cartContents,
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);