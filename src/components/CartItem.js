import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import OnPlusClick from './OnPlusClick'
import "./CartItem.css"

export const cartDetail = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
})


class CartItem extends PureComponent {
static propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}

render() {

  const { name, price, quantity } = this.props

  return(
    <ul className="CartItems">
      <li className="Name">{name}</li>Price:
      <li className="Price">{price}</li>Quantity:
      <li className="Quantity">{quantity}</li>
      <OnPlusClick onClick={this.incrementQuantity} />
    </ul>

  )
}
}

export default CartItem
