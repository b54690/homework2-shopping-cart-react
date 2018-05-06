import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import "./CheckoutButton.css"

export default class CheckoutButton extends PureComponent {
  static propTypes = {
    onCheckout: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="CheckoutButton" onClick={this.props.onClick}>Checkout</button>
    )
  }
}
