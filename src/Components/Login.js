import React, { Component } from 'react';
import {Platform, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Container, Header, Content, Form, Item, Input,Button, Text } from 'native-base';
export default class Login extends Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Dashboard'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    return (
        <Content padder style={styles.content}>
          <Form>
          <Item >
          {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
              <Input placeholder="Email" onChangeText={email => this.setState({email})} value={this.state.email}  />
            </Item>
            <Item>
              <Input secureTextEntry placeholder="Password" onChangeText={password => this.setState({password})} value={this.state.password}
              />
            </Item>

            <Button style={styles.button} block onPress={this.handleLogin}>
                <Text>Sign in</Text>
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
 