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
  
export default class ShowScreen extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            
              <View style={StyleSheet.container}>
              <View style={{height:'10%',width:'100%'}}>
              <HeaderComponent/>
              </View>
              <Text> Hello Show screen</Text>

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

  