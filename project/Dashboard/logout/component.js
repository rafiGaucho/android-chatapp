import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const LogoutButtonComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={props.logout}>

  <Text style={{backgroundColor:"#1B1464",borderRadius:5,padding:5,color:'white'}}>logout</Text>
  </TouchableOpacity>



export default LogoutButtonComponent
