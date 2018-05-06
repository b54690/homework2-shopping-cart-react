import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import "./CheckoutButton.css"

export default class CheckoutButton extends PureComponent {
  static propTypes = {
    onCheckout: PropTypes.func.isRequired
  }

  onCheckout = () => {return this.totalValue()}

  render() {
    return (
      <button className="CheckoutButton" onClick={this.props.onCheckout}>Checkout</button>
    )
  }
}
