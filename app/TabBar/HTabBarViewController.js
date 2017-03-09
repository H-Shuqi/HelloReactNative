import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView ,{DefaultTabBar, } from '../../node_modules/react-native-scrollable-tab-view';
import HTabBar from './HTabBar'
import HNavigator from '../Navigator/HNavigator'
import HomeViewController from '../Home/HomeViewController'
import MapViewController from '../Map/MapViewController'
import PersonViewController from '../Person/PersonViewController'

export default class HTabBarViewController extends Component {
    render() {
        var iconNames = ["ios-home","ios-map","ios-person"];
        return (
            <ScrollableTabView
                ref="tabView"
                locked={true}
                scrollWithoutAnimation={true}
                tabBarPosition='bottom'
                renderTabBar={ () => <HTabBar iconNames={iconNames} iconSize={24} activeTextColor="#2096F3" inactiveTextColor="#B7B7B7"/> }
            >
                <HNavigator tabLabel = "首页" rootViewController = {{Component:HomeViewController}} style={{backgroundColor:'#2096F3'}} />
                <HNavigator tabLabel = "地图" rootViewController = {{Component:MapViewController}} style={{backgroundColor:'#2096F3'}} />
                <HNavigator tabLabel = "个人" rootViewController = {{Component:PersonViewController}} style={{backgroundColor:'#2096F3'}} />
            </ScrollableTabView>
        );
    }
}