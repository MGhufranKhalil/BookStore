import React, { Component } from 'react';
import {Platform, StyleSheet } from 'react-native';

import { Container, Header, Content, Form, Item, Input,Button, Text } from 'native-base';
export default class Login extends Component {
  render() {
    return (
        <Content padder style={styles.content}>
          <Form>
          <Item >
              <Input placeholder="Username" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>

            <Button style={styles.button} block onPress={() => this.props.navigation.navigate('HomeScreen')} >
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
 