import React , {Component} from 'react';
import {ActivityIndicator,View} from "react-native";

class LoadingIndicator extends Component {
  render(){
    return(
      <View style={{justifyContent:'center',flex:1}}>
        <ActivityIndicator size='large' color="purple" />
      </View>
    )
  }
}

export default LoadingIndicator;
