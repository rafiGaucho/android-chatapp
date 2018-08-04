import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {View,Text} from 'react-native';
import {userSignup} from './../../../store/actions';
import Form from './../form'
import {connect} from 'react-redux';


class Signup extends Component {
  render(){
    return(
      <Form handleButtonPress={this.props.signup} buttonTitle='signup' />
        )
      }
    }

mapDispatchToProps={
  signup : userSignup
}
export default connect(null,mapDispatchToProps)(Signup)
