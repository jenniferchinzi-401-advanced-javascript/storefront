import React from 'react'
import {connect} from 'react-redux'
// import {addToCart} from '../../store/cart'

const SimpleCart = props => {
  
  return (

    <section className="simple-cart">
    {console.log('Props at Cart:', props)}
    <p>Cart: {props.cartLoad}</p>
    </section>

  )

}

const mapStateToProps = state => ({
  cartLoad: state.cart.cartContents.length,
})

// const mapDispatchToProps = {addToCart}

export default connect(mapStateToProps)(SimpleCart)