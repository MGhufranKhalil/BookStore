 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

import Login from './Components/Login';
import Store from './Components/Store';
import Book from './Components/Book';
 
export default class App extends Component {
    render() {
        return (
          <Container>
            <Header />
            <Content>
                <Book/>
                {/* <Store/> */}
               {/* <Login/> */}
            </Content>
          </Container>
        );
      }
}
 