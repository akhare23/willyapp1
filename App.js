
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createAppContainer} from "react-navigation"
import TransactionScreen from "./screens/transaction"
import SearchScreen from  "./screens/search"


export default class App extends React.Component {
  render(){
  return (
    <Appcont/>
  );
  }
}

var Nav = createBottomTabNavigator({
  Transactions:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})
var Appcont = createAppContainer(Nav)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

