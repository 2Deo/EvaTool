import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Paper from 'material-ui/Paper'
import Student from './Student'
import { addBatch } from '../actions/batch'

const dialogStyle = {
  width: '300px',
  margin: '30px',
  padding: '2rem',
}

var dateFormat = require('dateformat')
var now = new Date()
dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")

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
        <p> start: {dateFormat(startDate, "longDate")} </p>
        <p> end: {dateFormat(endDate, "longDate")} </p>
        <main className="Students">
         { students && students.map(this.renderStudents) }
        </main>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ currentBatch }) => ({ currentBatch })

export default connect (mapStateToProps, { addBatch }) (BatchForm)
