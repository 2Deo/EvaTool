import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Title from '../components/Title'
import { push } from 'react-router-redux'



class Batch extends PureComponent {

  goToBatch() {
    this.props.push(`/batches/${this.props._id}`)
  }

  render(){
    const { batchNumber, startDate, endDate } = this.props

    return(
      <div>
        <Paper onClick={this.goToBatch.bind(this)} className="dialogStyle" zDepth={3}>
          <Title content={ "Batch #" + batchNumber}/>
        </Paper>
      </div>
    )
  }
}

export default connect(null, { push })(Batch)
