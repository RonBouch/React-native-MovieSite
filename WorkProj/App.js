
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import MainScreen from './Src/Screens/MainScreen';
import ShowScreen from './Src/Screens/ShowScreen';

class App extends React.Component{
  render(){
    return <AppContainer/>;
  }
}
export default App;

const AppSwitchNavigator = createSwitchNavigator({
  ShowScreen:{screen:ShowScreen},

  MainScreen:{screen:MainScreen},

}); 
const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  scrollView: {
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

