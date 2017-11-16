import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Batch from './Batch.js'
import fetchBatches from '../actions/batch/fetch'
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';


const style = {
  marginRight: 20,
};

export class BatchesContainer extends PureComponent {

  componentWillMount() {
    this.props.fetchBatches()
  }

  renderBatch(batch, index) {
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
          <Title content="Batches" />
            <FloatingActionButton secondary={true} style={style} onClick={this.addBatch}>
          <ContentAdd />
            </FloatingActionButton>
        </header>

        <main className="Batches">
          { this.props.batches.map(this.renderBatch) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { fetchBatches, push }

export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
