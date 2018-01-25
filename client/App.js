/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import Header from './src/components/header'
import ItemList from './src/components/ItemList'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { viewStyle } = styles
    return (
      <View style={viewStyle}>
        <Header/>
        <ItemList/>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1
  }
}
