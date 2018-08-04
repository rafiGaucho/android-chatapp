import React ,{Component} from 'react';
import {View,Text} from 'react-native'
import styles from './Styles'


 const MessageRowComponent=props=>{

   const MESSAGE_TEXT_MARGIN=30
   const isCurrentUser = props.isCurrentUser
  const alignItems = isCurrentUser ? 'flex-end' : 'flex-start'
  const margin = isCurrentUser ? {marginLeft: MESSAGE_TEXT_MARGIN} : {marginRight: MESSAGE_TEXT_MARGIN}
  const username = isCurrentUser ? 'you' : props.message.email
  const d=new Date(props.message.createdAt)
  const date = d.toLocaleString()

  return (
    <View
      style={styles.container}>
      <View
        style={ [styles.bubbleView, {alignItems: alignItems}, margin] }>
        <Text
          style={styles.userText} >
          <Text>{date}  </Text><Text style={{color:"brown",fontSize:14}}>{username}</Text>
        </Text>
        <Text
          style={styles.messageText}>
          {props.message.text}
        </Text>
      </View>
    </View>
  )
}


export default MessageRowComponent
