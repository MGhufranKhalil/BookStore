import React, { Component } from 'react';
import { Image  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

export default class Dashboard extends Component {
  static navigationOptions = {
    
    headerLeft: (
      
      <Button transparent   
        onPress={() => alert('Drawer Navigation')}
      ><Icon type="FontAwesome" style={{color:"#0091cd",fontSize:20}} name="bars" /></Button>
    ),
    headerRight: (
      // <TouchableOpacity onPress={() => alert('This is a button!')}>
      //   <Icon style={{color:"#0091cd"}} name="logo-github" />
      // </TouchableOpacity>

      <Button transparent 
        onPress={() => alert('Add New Book')}
      ><Icon type="FontAwesome"  style={{color:"#0091cd",fontWeight:'normal',fontSize:20}} name="plus" /></Button>
    ),
  };
  render() {
    return (
     
        <Content padder>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Rich Dad Poor Dad</Text>
                  <Text note>Robert Keyosaki</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image onPress={() => alert("Read the book")}  source={require('../assets/images/richdad.jpg')} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button onPress={() => this.props.navigation.navigate('Book')} transparent textStyle={{color: '#87838B'}} >
                  <Icon name="logo-github" />
                  <Text>1,926 Views</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          {/* another book */}

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Rich Dad Poor Dad</Text>
                  <Text note>Robert Keyosaki</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image onPress={() => alert("Read the book")}  source={require('../assets/images/richdad.jpg')} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button onPress={() => this.props.navigation.navigate('Book')} transparent textStyle={{color: '#87838B'}} >
                  <Icon name="logo-github" />
                  <Text>1,926 Views</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      
    );
  }
}