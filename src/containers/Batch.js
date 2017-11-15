import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchBatches } from '../actions/batch'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 600,
    height: 450,
    overflowY: 'auto',
  },
};
  // class Students extends PureComponent {
  //   static propTypes ={
  //     name: PropTypes.string.isRequired,
  //     photo: PropTypes.string.isRequired,
  //     evaluations: PropTypes.string
  //   }
  // }

// Students.propTypes = {
//   batch: PropTypes.object({
//     batchNumber: PropTypes.number,
//     students: PropTypes.arrayOf(students),
//     startDate: PropTypes.string.isRequired,
//     endDate: PropTypes.string.isRequired,
//   })
// }
const students = []

// class Batch extends PureComponent {
//   static propTypes = {
//   batch: PropTypes.object({
//     batchNumber: PropTypes.number,
//     students: PropTypes.arrayOf(students),
//     startDate: PropTypes.string.isRequired,
//     endDate: PropTypes.string.isRequired,
//
//     })
//   }
  // componentWillMount() {
  //   const { batch, fetchBatches } = this.props
  //   const { batchId } = this.props.match.params
  //   this.props.fetchBatches(batchId)
  // }

//   render(){
//     return(
//       <div className="Batch" >
//
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = ({batch}) => ({batch})
//
// export default connect(mapStateToProps)(Batch)
