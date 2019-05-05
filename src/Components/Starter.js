 
import React, {Component} from 'react';
import {  Image,StyleSheet} from 'react-native';
import { Container, Header, Content, Form, Item, Input,Text, Button} from 'native-base';

export default class Starter extends Component {
    render() {
        let isLogin = 0;
        return (
          <Container padder style={styles.content}>
            <Header />
            <Content>
            <Image block
                style={{width: 200, height: 300, marginLeft:100}}
                source={{uri: 'https://requestreduce.org/images/clip-art-for-free-6.png'}}
                />
                <Button block onPress={() => this.props.navigation.navigate('Login')} transparent>
                  <Text>Sign in</Text>
                </Button>
                <Button block onPress={() => this.props.navigation.navigate('Login')} transparent>
                  <Text>Sign up</Text>
                </Button>
                {/* <Book/> */}
                {/* <Store/> */}
               {/* <Login/> */}
            </Content>
          </Container>
        );
    }
}

const styles= StyleSheet.create({
    content:{
        flex:1,
    }
});
 