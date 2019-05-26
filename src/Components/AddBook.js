import React, { Component } from 'react';
import {Platform, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Container, Header, Content, Form, Item, Input,Button, Text} from 'native-base';
import RNFetchBlob from 'react-native-fetch-blob'


export default class AddBook extends Component {
  state = { BookName: '', AuthorName: '',ShortDescription: '', errorMessage: null }
//${this.state.uid}
  handleUpload = () => {
    const { BookName, AuthorName, ShortDescription } = this.state
    console.log(BookName + ' ' + AuthorName + " " + ShortDescription )
    firebase
    .database()
    .ref(`Book/`).child("BookData")
    .push({
      BookName:BookName,
      AuthorName:AuthorName,
      ShortDescription: ShortDescription,
    }).then((data) => {
      //success callback
      console.log('data ', data)
    }).catch(error => this.setState({ errorMessage: error.message }));
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
              <Input placeholder="Book Name" onChangeText={BookName => this.setState({BookName})} value={this.state.BookName}  />
            </Item>
            <Item> 
              <Input placeholder="Author Name" onChangeText={AuthorName => this.setState({AuthorName})} value={this.state.AuthorName}  />
            </Item>

            <Item> 
            <Input placeholder="Short Description" onChangeText={ShortDescription => this.setState({ShortDescription})} value={this.state.ShortDescription}  />
            </Item>

            <Button style={styles.button} block onPress={this.handleUpload}>
                <Text>Upload</Text>
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
 