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
        var iconNames = ["ios-paper","ios-albums","ios-person-add"];
        return (
            <ScrollableTabView
                ref="tabView"
                locked={true}
                scrollWithoutAnimation={true}
                tabBarPosition='bottom'
                renderTabBar={ () => <HTabBar iconNames={iconNames} iconSize={24} activeTextColor="#2096F3" inactiveTextColor="#B7B7B7"/> }
            >
                <HNavigator
                    tabLabel = "首页"
                    title = "首页"
                    rootViewController = {HomeViewController}
                />
                <HNavigator
                    tabLabel="地图"
                    title = '地图'
                    rootViewController = {MapViewController}
                />
                <HNavigator
                    tabLabel="个人"
                    title = '个人'
                    rootViewController = {PersonViewController}
                />
            </ScrollableTabView>
        );
    }
}


     