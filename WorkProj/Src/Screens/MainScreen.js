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
    Dimensions
    
  } from 'react-native';
import { Footer } from 'native-base';
const { height } = Dimensions.get("window");

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        shows:[],
        screenHeight: 0,

        }
    }
    // renderItem=({item})=>{
    //     console.log(item)
    //     return(
    //  <View>
    //      {/* <Image style={{width:100,height:100}} 
    //      source={{uri:item.image}}/> */}
    //      <Text style={{color:'black',fontSize:16}}>zXZX:{item}{item.name}</Text>
    //  </View>
    //     )
    // }
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
      };
    componentDidMount(){
        const url ='http://api.tvmaze.com/shows/3/episodes?specials=1'
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
        const scrollEnabled = this.state.screenHeight > height - 1000;

        let Shows = [];
        
        if (this.state.shows != null) {
          Shows = this.state.shows.map((show,index)=>{ 
            console.log("image" + show.image.medium)
            return (
              <View
              key={index}
                style={{
                    width:'100%',
                  backgroundColor: "rgba(255,255,255,.4)"
                }}
              >
                  <View style={{ flexDirection: "row",marginBottom:3 }}>
                  <Image style={{width:100,height:100}} 
                  source={{uri:String(show.image.medium)}}/>
                  <Text>
                      Movie:{show.name}
                  </Text>
                  </View>  
              </View>
            );
          });
        }    
        console.log(this.state)

    
        return (
            
              <View style={StyleSheet.container}>
              <View style={{height:'10%',width:'100%'}}>
              <HeaderComponent/>
              </View>
              <Text> Hello Main screen</Text>

             <View style={StyleSheet.card}>
             <ScrollView
             style={{ marginBottom: "3%", marginTop: "2%" }}
             scrollEnabled={scrollEnabled}
             onContentSizeChange={this.onContentSizeChange}>
              {Shows}
             </ScrollView>
             
             </View>
             <View style={StyleSheet.titleAndRating}>
             <Button title="ShowScreen" onPress={()=>this.props.navigation.navigate('ShowScreen')} style={{}}/>

             </View>
             <View style={StyleSheet.titleAndRating}>

             </View>
              <FooterComponent />
            </View>
        )
    }
}

  