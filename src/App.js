 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import firebase from "firebase";
import { createStackNavigator, createAppContainer, createDrawerNavigator  } from "react-navigation";

import AddBook from './Components/AddBook';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Store from './Components/Store';
import Dashboard from './Components/Dashboard';
import Book from './Components/Book';
import Starter from './Components/Starter';
import HomeScreen from './Components/HomeScreen'
import Drawer from './Components/Drawer';
// export default class App extends Component {

//     render() {
//         let isLogin = 0;
//         return (
//           <Container>
//             <Header />
//             <Content>
//                 {/* <Book/> */}
//                 {/* <Store/> */}
//                {/* <Login/> */}
//             </Content>
//           </Container>
//         );
//       }
// }

// export default  createStackNavigator({
//     Login: Login,
//     Dashboard:Dashboard,
//     Book:Book
// });
class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBSjfaU3SINqY23n7KdKqVMNB_Gt6xpoCU",
            authDomain: "bookstore-9da14.firebaseapp.com",
            databaseURL: "https://bookstore-9da14.firebaseio.com",
            projectId: "bookstore-9da14",
            storageBucket: "bookstore-9da14.appspot.com",
            messagingSenderId: "709242893200",
            appId: "1:709242893200:web:0c4d5aeed2a05380"
        });
    }
    render() {
       
        return (
         <AppContainer/>  
        );
      }
}
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
const AppNavigator = createStackNavigator({
    Starter: {
        screen:Starter,
        navigationOptions: {
            header: null,
        }
    },
    Login: Login,
    Signup: Signup,
    AddBook: AddBook,
    Dashboard:Dashboard,
    Book:Book,
    HomeScreen: HomeScreen,
    Drawer:MyDrawerNavigator 
});
const AppContainer = createAppContainer(AppNavigator);
// export default createAppContainer(AppNavigator);
export default App;