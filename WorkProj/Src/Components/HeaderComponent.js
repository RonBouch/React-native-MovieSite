import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity,Text,View,Dimensions} from 'react-native';
import StyleSheet from '../Components/StyleSheet.js'

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
 this.state={

 }
  }
  
  render() {
    

    return (
      <Container style={StyleSheet.header}>
        <Header>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
              <Icon name='home' type="font-awesome"size={24}  />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>
      </Container>
    );
  }
}