import React, { Component } from 'react';
import {Platform, StyleSheet } from 'react-native';

import { Container, Header, Content, Form, Item, Input,Button, Text } from 'native-base';
export default class Signup extends Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignup = () => {
    // TODO: Firebase stuff...
    console.log('handleSignup')
  }
  render() {
    return (
        <Content padder style={styles.content}>
          <Form>
          <Item >
              <Input placeholder="Email" onChangeText={email => this.setState({email})} value={this.state.email}  />
            </Item>
            <Item>
              <Input secureTextEntry placeholder="Password" onChangeText={password => this.setState({password})} value={this.state.password}
              />
            </Item>

            <Button style={styles.button} block onPress={this.handleSignup}>
                <Text>Sign up</Text>
            </Button>
          </Form>
        </Content>
    );
  }
}

const styles= StyleSheet.create({
    content:{
        flex:1,
    },

    button: {
      marginTop: 10,
      padding: 20,
      width: '100%',
      backgroundColor: '#00aeef',
      borderRadius: 4,
      alignItems: 'center',
    }
});
 