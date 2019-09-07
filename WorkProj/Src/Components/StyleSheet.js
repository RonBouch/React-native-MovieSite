import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //Basic Design

  backgroundImage: {
    resizeMode: "cover"
  },
 
  footer : {
    position:'absolute',
    width:'100%',
    bottom: 0,
    backgroundColor: "rgba(255,255,255,.5)",
    alignItems:'center'

  },
  card: {
    marginTop: 10,
    // flex:3,
       height:'60%',
      justifyContent:'center',
      alignItems: "center",
       width: "80%",
      
       borderWidth:2,
       backgroundColor: "rgba(255,255,255,.5)",
  },
  card2: {
       height:'40%',
      justifyContent:'center',
      alignItems: "center",
       width: "100%",
       backgroundColor: "rgba(255,255,255,.5)",
  },
  titleAndRating:{
    width: "80%",
    height:'8%',
    backgroundColor: "rgba(255,255,255,.5)",
    marginTop: 10,
    alignContent:'center',
    alignItems:'center'
  },
  aboutMovie:{
    width: "80%",
    height:'20%',
    backgroundColor: "rgba(255,255,255,.5)",
    marginTop: 10,
    alignContent:'center',
    alignItems:'center'
  },
  show:{
    width:'100%',
    flex:1,
    flexDirection: "row",
  backgroundColor: "rgba(255,255,255,.4)",
  borderWidth:1,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%"
  },
  image:{
    width:100,
    height:100,
    margin:5
  },
  imageShow:{
    width:200,
    height:200,
    margin:5
  },
  headerView:{
    height:'10%',
    width:'100%',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    
    marginLeft:10,
    flexDirection:'row-reverse'
  },
  header:{
    width:'100%',
    height:'10%'
},
  textS:{
    fontSize:16,
    // fontWeight: "bold",
    color:'black'
  },
  textAvg:{
    fontSize:16,
    fontWeight: "bold",
    color:'black',
    justifyContent:'center',
    alignItems:'center'
  }


 
});