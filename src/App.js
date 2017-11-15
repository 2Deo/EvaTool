import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import Batch from './containers/Batch'
import Navigation from './components/Navigation'
import Routes from './routes'
import './App.css'
import BatchesContainer from './containers/BatchesContainer'

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
          <Navigation />
          <Routes />
          <BatchesContainer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
