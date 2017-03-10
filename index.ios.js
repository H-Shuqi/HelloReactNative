/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainViewController from './app/Main'

export default class HelloReactNative extends Component {
  render() {
    return (
      <MainViewController/>
    );
  }
}

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
