import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //Basic Design

  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  header:{
      width:'100%',
      height:'10%',
  },
  footer : {
    position:'absolute',
    bottom: 0,
    // backgroundColor: "rgba(255,255,255,.5)",
    borderColor: 'grey',
    alignItems:'center'

  },

  body: {
    //   flex:1,
      backgroundColor:'skyblue',
      justifyContent:'center',
    alignItems: "center",

    marginTop: "20%",
    width: "100%",
    height: "100%"

  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // paddingLeft: "10%",
    // paddingRight: "10%",
    width: "100%",
    height: "100%"
  },
  main: {
    backgroundColor: "rgba(255,255,255,.7)",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },

  
  input: {
    flexDirection: "row",
    // backgroundColor: "rgba(255,255,255,.5)",
    borderRadius: 50,
    width: 250,
    height: 40,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 2,
    margin: 5
  },

 
});