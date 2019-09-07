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
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
    ImageBackground
    
  } from 'react-native';
import { Footer } from 'native-base';
const { height } = Dimensions.get("window");

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        shows:[],
        screenHeight: 0,
        show:"",
        }
    }
    static navigationOptions={
        title:'Main Screen',
    };


    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
      };
      ShowWindow(show,index){
      this.setState({
          show:show
      })
      console.log("SHow"+this.state.show)
      }
    componentDidMount(){
        const url ='http://api.tvmaze.com/schedule'
        fetch(url)
        .then((response)=>response.json())
        .then((responsJson)=>{
            
            this.setState({
                shows:responsJson
            })

        })
        .catch((error)=>{
            console.log(error)
        })
                console.log("Didmount"+this.state.shows)

    }
    render() {
        const {navigate}=this.props.navigation
        const scrollEnabled = this.state.screenHeight > height - 1000;

        let Shows = [];
        
        if (this.state.shows != null) {
          Shows = this.state.shows.map((show,index)=>{ 
            
            console.log(show.show,)

            return (
              <View
              key={index}
              onTouchEndCapture={() => navigate('ShowScreen',{prevScreenTitle:show}) }
                style={StyleSheet.show}
              >          
                  <Image style={StyleSheet.image} 
                  source={{uri:String(show.show.image.medium)}}/> 
                  <View style={{marginLeft:5,flex:1,justifyContent:'center' }}>
                  <Text style={StyleSheet.textS}>
                      {show.show.name}
                  </Text>
                  </View>  
              </View>
            );
            
          });
           
    }
        console.log(this.state)

    
        return (
            <ImageBackground
        source={{uri:'https://movietheaterprices.com/wp-content/uploads/2015/08/Movie-Background-MovieTheaterPrices.jpg'}}
        style={StyleSheet.backgroundImage}
      >
              <View style={StyleSheet.container}>
              <View style={StyleSheet.header}>
              <HeaderComponent/>
              </View>
             <View style={StyleSheet.card}>
             <ScrollView
             style={{ width:'100%' }}
             scrollEnabled={scrollEnabled}
             onContentSizeChange={this.onContentSizeChange}>
              {Shows}
             </ScrollView>
             
             </View>
             <View style={StyleSheet.titleAndRating}>
             <Text style={{fontSize:26,fontWeight: "bold",color:'white'}}>Ron's-Movies</Text>
             </View>
             <View style={StyleSheet.titleAndRating}>

             </View>
              <FooterComponent />
            </View>
            </ImageBackground>
                    )
    }
}

  