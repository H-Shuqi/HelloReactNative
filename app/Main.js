import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import HNavigator from './Navigator/HNavigator'
import HTabBarController from './TabBar/HTabBarController'

import HomeViewController from './Home/HomeViewController'
import MapViewController from './Map/MapViewController'
import PersonViewController from './Person/PersonViewController'

export default class MainViewController extends Component {
    render() {
        return (
            //<HNavigator rootViewController = {{Component:HTabBarViewController}} style={{backgroundColor:'#2096F3'}} />

            <HNavigator style={{backgroundColor:'#2096F3'}}>
                <HTabBarController>
                    <HomeViewController tabLabel="首页" icon='ios-home'/>
                    <MapViewController tabLabel="地图" icon='ios-map'/>
                    <PersonViewController tabLabel="个人" icon='ios-person'/>
                </HTabBarController>
            </HNavigator>
        );
    }
}