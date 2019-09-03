import React, { Component } from 'react'
import StyleSheet from '../Components/StyleSheet.js'
import HeaderComponent from '../Components/HeaderComponent'

import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';
  
export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <View>
              <HeaderComponent/>
              <View style={{flex:5}}>
              <Text>
                    Hello MainScreen
                </Text>
                <View>
                <Text>
                    To Show Screen -> :
                </Text>
                <Button title="ShowScreen" onPress={()=>this.props.navigation.navigate('ShowScreen')} style={{}}/>

              </View>
              
                </View>
                

            </View>
        )
    }
}

  