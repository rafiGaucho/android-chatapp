import {TabNavigator}  from 'react-navigation';
import Login from './Auth/Login/index';
import Signup from './Auth/Signup/index';

const routeConfigs = {
  Login: Login ,

  Signup:Signup,

}

const tabBarOptions = {
  tabBarOptions: {
    activeTintColor: '#88cc88',
    inactiveTintColor: '#aaaaaa',
    showIcon: true,
    swipeEnabled:true,
    scrollEnabled: false,
    indicatorStyle: {
      display: 'none',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  },
  tabBarPosition: 'top',
  initialRouteName:'Signup'
}

export default TabNavigator(routeConfigs,tabBarOptions)
