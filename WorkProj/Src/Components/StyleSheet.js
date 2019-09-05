import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //Basic Design

  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  header:{

      width:'100%',

  },
  footer : {
    position:'absolute',
    width:'100%',
    bottom: 0,
    backgroundColor: "rgba(255,255,255,.5)",
     backgroundColor:'yellow',
    alignItems:'center'

  },

  card: {
    marginTop: 20,
       height:'40%',
      justifyContent:'center',
      alignItems: "center",
       width: "80%",
       backgroundColor:'brown',
      //  padding:'10%'
  },
  card2: {
       height:'50%',
      justifyContent:'center',
      alignItems: "center",
       width: "100%",
       backgroundColor:'brown',
  },
  titleAndRating:{
    width: "80%",
    height:'10%',
    backgroundColor:'red',
    marginTop: 20

  },
  container: {
    backgroundColor:'skyblue',
    flexDirection: "column",
    alignItems: "center",
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