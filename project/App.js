import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {session} from './store/reducer'
import firebase from 'firebase'
import LoadingIndicator from "./loadingIndicator/container.js"
import Start from './Start/Start.js'

const middleware = [thunk]
export const store=createStore(session,applyMiddleware(...middleware))


export default class App extends Component {
   componentWillMount=()=>{
     var config = {
       apiKey: "AIzaSyAnv_WzEg5jch8meaL3fS6OKnfNOzQv9Ts",
       authDomain: "chatapp-edca2.firebaseapp.com",
      databaseURL: "https://chatapp-edca2.firebaseio.com",
      projectId: "chatapp-edca2",
      storageBucket: "chatapp-edca2.appspot.com",
      messagingSenderId: "448319299781"
      };
    firebase.initializeApp(config);

  };

  render() {
    return (
     <Provider store={store}>
    <Start />
     </Provider>

    );
  }
}
