import React ,{Component} from 'react'
import {}from 'react-native';
import firebase from 'firebase';
import MessageRowComponent from './messageRowComponent.js';

export default class MessageRow extends Component {
  render(){
    const isCurrentUser = firebase.auth().currentUser.email == this.props.data.email;
    return(
      <MessageRowComponent
              message={this.props.data}
              isCurrentUser={isCurrentUser}/>

    )
  }
}
