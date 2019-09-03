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

    }
    
    render() {
        return (
            
              
              <View style={StyleSheet.container}>
              <HeaderComponent/>
              <View style={StyleSheet.body}>
              <Text>
                    Hello ShowScreen
                </Text>
                <View>
                <Text>
                    To Main Screen -> :
                </Text>
                <Button title="ShowScreen" onPress={()=>this.props.navigation.navigate('MainScreen')} style={{}}/>

              </View>      
              </View>   
           <FooterComponent />
      
            </View>
        )
    }
}

  