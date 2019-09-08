import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity,Text,View,Dimensions} from 'react-native';
import StyleSheet from '../Components/StyleSheet.js'
import { WebView } from 'react-native-webview';

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
          
          </Left>
          <Body>
            <Title>Moon-site</Title>
          </Body>
          <Right>
         
          </Right>
        </Header>
      </Container>
    );
  }
}