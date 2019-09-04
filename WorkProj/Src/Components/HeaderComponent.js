import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity,Text,View} from 'react-native';
import StyleSheet from '../Components/StyleSheet.js'

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <Container style={StyleSheet.header}>
        <Header>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-left' type="font-awesome"size={20}  />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <TouchableOpacity 
            onPress={() => alert('Rob')}>
              <Icon name='bars' type="font-awesome" size={20} />
            </TouchableOpacity>
          </Right>
        </Header>
      </Container>
    );
  }
}