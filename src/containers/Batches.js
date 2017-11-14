// src/containers/Lobby.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchBatches } from '../actions/batch'


class BatchContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchBatches()
  }

  render(){
    return(
      <div className="BatchContainer" >

      </div>
    )
  }
}

const mapStateToProps = ({batch}) => ({batch})
const mapDispatchToProps = { fetchBatches }

export default connect(mapStateToProps,mapDispatchToProps)(BatchContainer)
