import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import OnPlusClick from './OnPlusClick'
import "./CartItem.css"

export const cartDetail = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id:PropTypes.number.isRequired,
})


class CartItem extends PureComponent {

static propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
}

render() {

  const { id, name, price, quantity, incrementQuantity } = this.props

  console.log(id)
  console.log(quantity)

  return(
    <ul className="CartItems">
      <li className="Name">{name}</li>Price:
      <li className="Price">{price}</li>Quantity:
      <li className="Quantity">{quantity}</li>
      <OnPlusClick id={id} quantity={quantity} onClick={incrementQuantity} />
    </ul>

  )
}
}

export default CartItem
