import React, { PureComponent } from 'react'
import CartItem, { cartDetail } from '../components/CartItem'
import PropTypes from 'prop-types'


export default class Cart extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(cartDetail).isRequired,
    incrementQuantity: PropTypes.func.isRequired
  }

  render() {
    const { products, incrementQuantity } = this.props
    products.sort((a,b) => b.price - a.price);

    return (
      <div>
        <ul className="Cart">
          {products.map((product, index) =>
            (<CartItem key={index} onClick={incrementQuantity} 
              { ...product } />))}
        </ul>
      </div>
    )
  }
}
