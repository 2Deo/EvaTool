import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import Batch from './components/Batch'

import './App.css'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">

          <Batch content="Batch" />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
