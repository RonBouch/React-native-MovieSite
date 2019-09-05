import React, { Component } from 'react'
import StyleSheet from '../Components/StyleSheet.js'
import HeaderComponent from '../Components/HeaderComponent'
import FooterComponent from '../Components/FooterComponent'

import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TouchableOpacity
  } from 'react-native';
import { Footer } from 'native-base';
  
export default class ShowScreen extends React.Component {
    constructor(props) {
        super(props);
       this.state={
        prevScreenTitle:this.props.navigation.state.params.prevScreenTitle,

       }
    }
    static navigationOptions={
        title:'Show Screen',
    };
    render() {

        return (
            
              <View style={StyleSheet.container}>
              <View style={StyleSheet.headerView}>
              <HeaderComponent />
              </View>
              <Text> {this.state.prevScreenTitle.name}</Text>

             <View style={StyleSheet.card2}>
             <Button title="MainScreen" onPress={()=>this.props.navigation.navigate('MainScreen')} style={{}}/>
             </View>
             <View style={StyleSheet.titleAndRating}>

             </View>
             <View style={StyleSheet.titleAndRating}>

             </View>
              <FooterComponent />
            </View>
        )
    }
}

  