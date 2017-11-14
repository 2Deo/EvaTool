import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Batch extends PureComponent {
  static propTypes = {
  content: PropTypes.string.isRequired,
  }
  render() {
    return(
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Batch
