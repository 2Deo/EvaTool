import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Paper from 'material-ui/Paper'
import Student from './Student'
import { addBatch } from '../actions/batch'
import { push } from 'react-router-redux'
import AddStudent from './AddStudent'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import fetchABatch from '../actions/batch/fetch'

const dialogStyle = {
  width: '300px',
  margin: '30px',
  padding: '2rem',
}

const style = {
  marginRight: 20,
}


class BatchForm extends PureComponent {
  componentWillMount() {
    const { fetchABatch, batchId } = this.props.match.params

  }

  renderStudents(student, index) {
    return (
      <Student key={index} {...student} />
    )
  }

  addStudent = () => {
    this.props.push(`${window.location.pathname}/add-student`)
  }

  render() {
    const { currentBatch } = this.props
    if (!currentBatch) return null
    const  { batchNumber, startDate, endDate, students } = this.props.currentBatch

    return (
      <div>
        <Paper style={ dialogStyle }>
        <Title content={`Batch #${batchNumber}`} />
        <FloatingActionButton secondary={true} style={style} onClick={this.addStudent}>

        </FloatingActionButton>
        <main className="Students">
         { students && students.map(this.renderStudents) }
        </main>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ currentBatch }) => ({ currentBatch })

export default connect (mapStateToProps, { push, addBatch }) (BatchForm)
