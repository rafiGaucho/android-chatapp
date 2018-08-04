import React from 'react'
import { connect } from 'react-redux'

import { logoutUser } from './../../store/actions.js'

import LogoutButtonComponent from './component.js'

const LogoutButtonContainer = props =>
  <LogoutButtonComponent logout={props.logout} />

const mapDispatchToProps = {
  logout: logoutUser
}

export default connect(null, mapDispatchToProps)(LogoutButtonContainer)
