import React , {Component} from 'react';
import {View,TextInput,TouchableOpacity,Button,Text} from 'react-native';
import styles from './Styles.js'
import {connect} from 'react-redux'
import {sendMessage} from './../../store/actions'

class MessageForm extends Component {
  constructor(props){
    super(props)
    this.state={
      textMessage:'',
    }
    this.handleTextMessage=(textMessage)=>{
      this.setState({textMessage:textMessage})
    }
    this.handleButton=()=>{
      this.props.check(this.state.textMessage)
      this.setState({textMessage:''})
    }
  }
  render(){
    disable=this.state.textMessage.trim().length == 0
    return(
    <View>
      <View style={styles.container}>
        <TextInput style={ styles.TextInput}
          placeholder='message'
          value={this.state.textMessage}
          onChangeText={this.handleTextMessage}
          underlineColorAndroid={'transparent'}
          returnKeyType='send'
          />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleButton}
          disabled={disable}
          >
          <Text>send</Text>

        </TouchableOpacity>

      </View>

    </View>
    )
  }
}

mapDispatchToProps={
  check:sendMessage,
}
export default connect(null,mapDispatchToProps)(MessageForm)
