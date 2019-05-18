 
import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Container, Header, Content, Form, Item, Input,Text, Button} from 'native-base';

export default class Starter extends Component {
    render() {
        let isLogin = 0;
        return (
          <Container padder style={styles.content}>
           
            <Content style={{marginTop:50}}>
            <Form>
            <Image block
                style={{width: 200, height: 300, marginLeft:100}}
                source={{uri: 'https://requestreduce.org/images/clip-art-for-free-6.png'}}
                />
                <View>
                    <Text style={styles.MainText}>
                        BOOK APP
                    </Text>
                </View>
                <Button style={styles.button} block onPress={() => this.props.navigation.navigate('Login')}>
                  <Text>Sign in</Text>
                </Button>
                <Button style={styles.button} block onPress={() => this.props.navigation.navigate('Login')}>
                  <Text>Sign up</Text>
                </Button>
                {/* <Book/> */}
                {/* <Store/> */}
               {/* <Login/> */}
               </Form>
            </Content>
          </Container>
        );
    }
}

const styles= StyleSheet.create({
    content:{
        flex:1,
    },
    MainText:{
        fontSize:24,
        textAlign:'center',
        color:'#0091cd' 
    },

    button: {
      marginTop: 10,
      marginLeft:15,
      marginRight:15,
      padding: 20,
      
      backgroundColor: '#0091cd',
      borderRadius: 4,
      alignItems: 'center',
    }
});
 