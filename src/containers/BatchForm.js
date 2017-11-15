import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Paper from 'material-ui/Paper'
import Student from './Student'
import { push } from 'react-router-redux'
import fetchABatch from '../actions/batch'

const dialogStyle = {
  width: '300px',
  margin: '30px',
  padding: '2rem',
}


class BatchForm extends PureComponent {
  componentWillMount() {
    const { batchId } = this.props.match.params
    this.props.fetchABatch(batchId)
  }

  renderStudents(student, index) {
    return (
      <Student key={index} {...student} />
    )
  }


  render() {
    const { currentBatch } = this.props
    if (!currentBatch) return null
    const  { batchNumber, startDate, endDate, students } = this.props.currentBatch

    return (
      <div>
        <Paper style={ dialogStyle }>
        <Title content={`Batch #${batchNumber}`} />
        <main className="Students">
         { students && students.map(this.renderStudents) }
        </main>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ currentBatch }) => ({ currentBatch })

export default connect (mapStateToProps, { push, fetchABatch }) (BatchForm)
