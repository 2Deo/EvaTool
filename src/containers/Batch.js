import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Title from '../components/Title'
import { push } from 'react-router-redux'

const dialogStyle = {
    width: '300px',
    margin: '20px auto',
    padding: '2rem',
    cursor: 'pointer'
}


class Batch extends PureComponent {

  goToBatch() {
    this.props.push(`/batches/${this.props._id}`)
  }

  render(){
    const { batchNumber, startDate, endDate } = this.props

    return(
      <div>
        <Paper style={ dialogStyle } onClick={this.goToBatch.bind(this)} className="dialogStyle" zDepth={3}>
          <Title content={ "Batch #" + batchNumber}/>
        </Paper>
      </div>
    )
  }
}

export default connect(null, { push })(Batch)
