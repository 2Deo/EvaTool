// src/components/Navigation.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import LocalDining from 'material-ui/svg-icons/maps/local-dining'
import FlatButton from 'material-ui/FlatButton'

class Navigation extends PureComponent {
  // ...

  signUp() {
    this.props.push('/sign-up')
  }

  goHome() {
    this.props.push('/')
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title="Recipes"
        iconElementLeft={<IconButton onClick={this.goHome}><LocalDining /></IconButton>}
        iconElementRight={signedIn ?
          <FlatButton label="Sign out" onClick={this.signOut.bind(this)} /> :
          <FlatButton label="Sign up" onClick={this.signUp} />
        }
      />
    )
  }

const mapStateToProps = // ...

export default connect(mapStateToProps, { push })(Navigation)