 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './Components/Login';
import Store from './Components/Store';
import Dashboard from './Components/Dashboard';
import Book from './Components/Book';
import Starter from './Components/Starter';
 
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

const AppNavigator = createStackNavigator({
    Starter: {
        screen:Starter,
        navigationOptions: {
            header: null,
        }
    },
    Login: Login,
    Dashboard:Dashboard,
    Book:Book
});

export default createAppContainer(AppNavigator);