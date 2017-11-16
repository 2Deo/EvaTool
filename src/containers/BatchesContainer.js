import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { fetchBatches } from '../actions/batch'
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import './BatchesContainer.css'
import Batch from './Batch.js'


const style = {
  marginRight: 20,
};

export class BatchesContainer extends PureComponent {

  componentWillMount() {
    this.props.fetchBatches()
  }

 goToBatch(batch, index) {
   return (
     <Batch key={index} {...batch} />
   )
 }

 addBatch = () => {
  this.props.push('/add-batch')
}

  render() {

    return(
      <div >
        <header>
          <Title content="Batches Container" />
          <FloatingActionButton secondary={true} style={style} onClick={this.addBatch}>
          <ContentAdd />
          </FloatingActionButton>
        </header>

        <main className="Batches">
          { this.props.batches.map(this.goToBatch) }
        </main>
      </div>
    )
  }
}


const mapStateToProps = ({ batches, currentUser }) => ({ batches, signedIn: !!currentUser && !!currentUser._id, })
const mapDispatchToProps = { fetchBatches, push }

export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
