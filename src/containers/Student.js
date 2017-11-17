import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

const dialogStyle = {
  width: '300px',
  height: '300px',
  margin: '20px auto',
  padding: '2rem',
}

class Student extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { name } = this.props

    return(
      <Paper style={ dialogStyle} zDepth={3}>
        <Title content={name}/>
      </Paper>
    )
  }
}

export default connect(null, { push }) (Student)
