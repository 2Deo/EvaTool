import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  BatchesContainer,
  SignIn,
  SignUp,
  BatchForm,
  AddBatch,
  AddStudent

} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/batches/:batchId" component={BatchForm} />
        <Route path="/add-batch" component={AddBatch} />
        <Route path="/batches/:batchId/add-student" component={AddStudent} />
      </div>
    )
  }
}
