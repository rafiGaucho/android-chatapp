import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {View,Text} from 'react-native';
import {userLogin} from './../../../store/actions';
import Form from './../form'
import {connect} from 'react-redux';


class Login extends Component {
  static navigationOptions={
    title:'Login'

  }
  render(){
    return(
      <Form handleButtonPress={this.props.login} buttonTitle='login' />
        )
      }
    }

mapDispatchToProps={
  login : userLogin
}
export default connect(null,mapDispatchToProps)(Login)
