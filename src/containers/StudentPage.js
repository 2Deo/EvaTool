import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Paper from 'material-ui/Paper'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'


const style = {
  marginRight: 20,
};

const dialogStyle = {
  width: '300px',
  margin: '20px auto',
  padding: '2rem',
}

class StudentPage extends PureComponent {
  componentWillMount() {
    const { studentId } = this.props.match.params

  }

  render() {
    const { currentStudent } = this.props
    if (!currentStudent) return null

    const { name, photo, evaluation, students } = this.props.currentStudent

    return(
      <div>
        <Paper style={style}>
        <Title content={name} />
        </Paper>
      </div>


    )
  }
}

const mapStateToProps = ({ currentStudent }) => ({ currentStudent })
export default connect(mapStateToProps)(StudentPage)
