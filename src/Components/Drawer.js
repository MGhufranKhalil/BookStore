import React from 'react';
import { Button, Image, View, Text,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer,createDrawerNavigator } from 'react-navigation';
import Login from './Login';
import Store from './Store';
import Dashboard from './Dashboard';
import Book from './Book';
import Starter from './Starter';
import HomeScreen from './HomeScreen'

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: Dashboard,
    },
    Settings: {
      screen: Dashboard,
    },
    Logout: {
        screen: Dashboard,
    },

});
const MyApp = createAppContainer(MyDrawerNavigator);
export default class App extends React.Component {
    render() {
      return <MyApp/>;
    }
  }