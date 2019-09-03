import React, { Component } from 'react';
import {Text,View} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import StyleSheet from '../Components/StyleSheet.js'

export default class FooterComponent extends Component {
  render() {
    return (
     <View style={StyleSheet.footer}>
         <Text style={{fontSize:20}}>Ron-Bouchnick</Text>
     </View>
    );
  }
}