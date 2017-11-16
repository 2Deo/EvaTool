import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Title from '../components/Title'
import addStudent from '../actions/students/add'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  marginLeft: '9rem',
  marginTop: '2rem',
}

export class AddStudent extends PureComponent {

  submitForm(event) {
    event.preventDefault()
    const Student = {
      name: this.refs.name.getValue(),
      photo: this.refs.photo.getValue(),
      evaluation: [{evaluation: 0}]
    }

    const batchId = window.location.pathname.replace('/batches/','').replace('/add-student','')
    this.props.addStudent(Student, batchId)
    this.props.push(`/batches/${batchId}`)
  }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <div>
          <Title content="Add Student" level={2} />

          <form onSubmit={this.submitForm.bind(this)}>
            <div className="input">
              <TextField ref="name" type="text" hintText="Full name" />
            </div>
            <div className="input">
              <TextField ref="imageUrl" type="text" hintText="Image URL" />
            </div>
          </form>
          <RaisedButton
            style={ buttonStyle }
            onClick={ this.submitForm.bind(this) }
            label="Add Student"
            primary={true} />
          </div>
      </Paper>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { push, addStudent })(AddStudent)
