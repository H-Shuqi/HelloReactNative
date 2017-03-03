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

import HTabBarViewController from './app/TabBar/HTabBarViewController'

export default class HelloReactNative extends Component {
  render() {
    return (
      <HTabBarViewController></HTabBarViewController>
    );
  }
}

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
