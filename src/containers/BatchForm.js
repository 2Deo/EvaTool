import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Student from './Student'
import { push } from 'react-router-redux'
import AddStudent from './AddStudent'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { fetchABatch } from '../actions/batch/fetch'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  marginRight: 40,
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

  addStudent = () => {
    this.props.push(`${window.location.pathname}/add-student`)
  }

  render() {
    const { currentBatch } = this.props
    if (!currentBatch) return null
    const  { batchNumber, startDate, endDate, students } = currentBatch

    return (
      <div>
        <Title content={`Batch #${batchNumber}`} />
        <FloatingActionButton secondary={true} style={style} onClick={this.addStudent}>
          <ContentAdd />
        </FloatingActionButton>
          <RaisedButton
          onClick={ this.askQuestion }
          label="Ask a Question"
          primary={true}
          />
        <main className="Students">
         { students && students.map(this.renderStudents) }
        </main>

      </div>
    )
  }
}

const mapStateToProps = ({ currentBatch }) => ({ currentBatch })

export default connect (mapStateToProps, { push, fetchABatch }) (BatchForm)
