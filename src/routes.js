import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  BatchesContainer,
  SignIn,
  SignUp,
  BatchForm
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/batches/:batchId" component={BatchForm} />
      </div>
    )
  }
}
