import React ,{Component} from 'react';
import {connect} from 'react-redux';
import LoadingIndicator from './../loadingIndicator/container.js';
import {View,Text} from 'react-native'
import Auth from './../Auth/index.js';
import MessageForm from './../Dashboard/messageForm/messageForm.js';
import FlatListComponent from './../Dashboard/flatList/flatlist.js';
import LogoutButtonContainer from './../Dashboard/logout/container.js';
import Styles from './styles.js';

class Start extends Component{

render(){

  if(this.props.loading){
    return(<LoadingIndicator />) }

    else if(this.props.logged==false){
        return(<Auth />)
                  }
    else {
        return( <View style={Styles.container}>
                <LogoutButtonContainer />
                <FlatListComponent  />
                <MessageForm />
              </View>) }

}      }

mapStateToProps=(state)=>({
  loading:state.loading,
  logged:state.logged,
})

export default connect(mapStateToProps)(Start)
