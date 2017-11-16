import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import addBatch from '../actions/batch/add'
import Title from '../components/Title'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  marginLeft: '9rem',
  marginTop: '2rem',
}


export class AddBatch extends PureComponent {

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }

  submitForm(event) {
    event.preventDefault()
    const Batch = {
      batchNumber: Number(this.refs.batchNumber.getValue()),
      startDate: this.refs.startDate.state.date,
      endDate: this.refs.endDate.state.date
    }

    const batches = this.props.batches
    this.props.addBatch(Batch, batches)
    this.props.push('/')
  }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <Title content="Add Batch" level={2} />
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="batchNumber" type="text" hintText="01" />
          </div>
          <div className="input">
            <DatePicker ref="startDate" hintText="Start date" />
          </div>
          <DatePicker ref="endDate" hintText="End date" />
        </form>
        <RaisedButton
          style={ buttonStyle }
          onClick={ this.submitForm.bind(this) }
          label="Add Batch"
          primary={true} />
      </Paper>
    )
  }
}


const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, { push, addBatch })(AddBatch)
