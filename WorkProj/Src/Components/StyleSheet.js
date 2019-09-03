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
      flex:1
  },
  logo: {
    alignItems: "center",
    marginTop: "15%",
    width: "90%",
    height: "30%"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
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
    backgroundColor: "rgba(255,255,255,.5)",
    borderRadius: 50,
    width: 250,
    height: 40,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 2,
    margin: 5
  },

 
});