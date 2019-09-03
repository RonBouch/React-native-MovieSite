import React, { Component } from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TouchableOpacity
  } from 'react-native';
  
export default class ShowScreen extends Component {
    render() {
        return (
           <View>
               <HeaderComponent/>
               <Text>Hello ShowScreen</Text>
               <Button title="MainScreen" onPress={()=>this.props.navigation.navigate('MainScreen')} style={{ height:'50%', width:10}}/>
               <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('MainScreen')}>
                   <Text>CLick me</Text>
               </TouchableOpacity>
           </View>
        )
    }
}
