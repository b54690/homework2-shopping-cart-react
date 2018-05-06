import React, { PureComponent } from 'react'
import Clock from 'react-live-clock';

export default class LiveClock extends PureComponent {
  render() {
    return (
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    )
  }
}
