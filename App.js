import React, { Component } from 'react';
import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from './LoginScreen';
import Profile from './ProfileScreen';
import Home from './HomeScreen';


const Navigator = createStackNavigator({
  Home : {
    screen : Home,
    navigationOptions: {
      header : null
    }
  },
  login: {
   screen: Login
    }
});


  export default createAppContainer (Navigator);