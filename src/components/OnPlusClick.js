import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class OnPlusClick extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }


  render() {
    return (
      <button className="PlusOne" onClick={this.props.onClick}>+</button>
    )
  }
}
