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
  
export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            
              <View style={StyleSheet.container}>
              <View style={{height:'10%',width:'100%'}}>
              <HeaderComponent/>
              </View>
              <Text> Hello Main screen</Text>

             <View style={StyleSheet.card}>
             <Button title="ShowScreen" onPress={()=>this.props.navigation.navigate('ShowScreen')} style={{}}/>
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

  