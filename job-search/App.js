import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

const MainNavigator = createBottomTabNavigator({
  Auth: { screen: AuthScreen },
  Welcome: { screen: WelcomeScreen },
  //In the main flow of the app display a tab navigation
  Main: {
    screen: createBottomTabNavigator({
      Deck: {screen: DeckScreen},
      Map: {screen: MapScreen},
      //This is the review flow 
      review: {
        screen: createStackNavigator({
          review: {screen: ReviewScreen},
          settings: {screen: SettingsScreen}
        })
      }
    })
  }
});


const App = createAppContainer(MainNavigator);

export default App;

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

