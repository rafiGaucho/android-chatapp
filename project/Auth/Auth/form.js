 import React ,{Component} from 'react';
 import {View,StyleSheet,Alert,TouchableOpacity,TextInput,Text} from 'react-native';
 import {connect} from 'react-redux';
 import styles from './Styles'

export default  class Form extends Component {
   constructor(props){
     super(props)
     this.state={
       email:'',
       password:'',
     }

     this.handleEmailChange=(email)=>{
       this.setState({email:email})
     }
     this.handlePasswordChange=(password)=>{
       this.setState({password:password})

    }

   };


   render(){
     backgroundColor=(this.props.buttonTitle=='login')? "#10ac84" : "#ff9f43"
     return(
       <View style={styles.container}>
         <TextInput style={styles.TextInput}
           placeholder='email'
           onChangeText={this.handleEmailChange}
           value={this.state.email}
         />
         <TextInput style={styles.TextInput}
           placeholder='password'
           onChangeText={this.handlePasswordChange}
           value={this.state.password}
         />
         <TouchableOpacity style={[styles.Button,{backgroundColor:backgroundColor}]}
           onPress={()=>this.props.handleButtonPress(this.state.email,this.state.password)}>
           <Text style={styles.text}>{this.props.buttonTitle}</Text>
         </TouchableOpacity>
       </View>
     );
   }
 };
