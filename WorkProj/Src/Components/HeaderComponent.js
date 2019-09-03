import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity} from 'react-native';
import StyleSheet from '../Components/StyleSheet.js'

export default class HeaderComponent extends Component {
  render() {
    return (
      <Container style={StyleSheet.header}>
        <Header>
          <Left>
            <TouchableOpacity transparent>
              <Icon name='arrow-left' type="font-awesome"size={20} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <TouchableOpacity transparent>
              <Icon name='bars' type="font-awesome" size={20} />
            </TouchableOpacity>
          </Right>
        </Header>
      </Container>
    );
  }
}