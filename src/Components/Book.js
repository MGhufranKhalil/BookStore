import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class Book extends Component {
  render() {
    return (
      <WebView
        source={require('../assets/pdf/RichDadPoorDad.pdf') }
        style={{marginTop: 20}}
      />
    );
  }
}