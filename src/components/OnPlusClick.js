import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class OnPlusClick extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }


  render() {
    const { id, quantity} = this.props
    return (
      <button className="PlusOne" onClick={() => this.props.onClick(id, quantity)}>+</button>
    )
  }
}
