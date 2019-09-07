import React, { Component } from 'react'
import StyleSheet from '../Components/StyleSheet.js'
import HeaderComponent from '../Components/HeaderComponent'
import FooterComponent from '../Components/FooterComponent'

import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Button,
    TouchableOpacity,
    ImageBackground,
    Header,
    Left,
    Right,
    Body,
    Title
  } from 'react-native';
import { Footer } from 'native-base';
  
import Icon from "react-native-vector-icons/FontAwesome";

export default class ShowScreen extends React.Component {
    constructor(props) {
        super(props);
       this.state={
        prevScreenTitle:this.props.navigation.state.params.prevScreenTitle,

       }
       this.summary=""
    }
    static navigationOptions={
        title:'Show Screen',
    };
    checkSummary=()=>{
        console.log("img"+this.state.prevScreenTitle.show.image.medium)
        var b= this.state.prevScreenTitle.show.summary;
         b=b.replace('<p>', "")
         b=b.replace('</p>', "")
         b=b.replace('<b>', "")
         b=b.replace('</b>', "")
         this.summary=b;

        console.log(b);
       }
    render() {
 this.checkSummary();
         return (
            <ImageBackground
        source={{uri:'https://movietheaterprices.com/wp-content/uploads/2015/08/Movie-Background-MovieTheaterPrices.jpg'}}
        style={StyleSheet.backgroundImage}
      >
              <View style={StyleSheet.container}>

              <View style={StyleSheet.headerView}>
              <Text style={{ fontSize:22,fontWeight: "bold",color:'black'}}>{this.state.prevScreenTitle.name}</Text>

            <TouchableOpacity style={{}}
             onPress={() => this.props.navigation.navigate('MainScreen')}>
              <Icon name='arrow-left' type="font-awesome"size={24}  />
            </TouchableOpacity>
              </View>

             <View style={StyleSheet.card2}>
             <Image style={StyleSheet.imageShow} 
                  source={{uri:String(this.state.prevScreenTitle.show.image.medium)}}/>
             </View>
             <View style={StyleSheet.titleAndRating}>
                <Text style={StyleSheet.textAvg}>
                  Avg rating : {this.state.prevScreenTitle.show.rating.average}\Season: {this.state.prevScreenTitle.season}\ number : {this.state.prevScreenTitle.number}
                </Text>
             </View>
             <View style={StyleSheet.aboutMovie}>
             <ScrollView>
               <Text style={StyleSheet.textS}>Schedule : time : {this.state.prevScreenTitle.show.schedule.time} , days : {this.state.prevScreenTitle.show.schedule.days}  </Text>
               <Text style={StyleSheet.textS}>Language : {this.state.prevScreenTitle.show.language}</Text>
               <Text style={StyleSheet.textS}>Network : {this.state.prevScreenTitle.show.network.name}</Text>
               <Text style={StyleSheet.textS}>Genres:  {this.state.prevScreenTitle.show.genres} </Text>
             <Text style={StyleSheet.textS}>
                Summary:  {this.summary}
                  </Text>
             </ScrollView>
                  
             </View>
              <FooterComponent />
            </View>
            </ImageBackground>
        )
    }
}

  