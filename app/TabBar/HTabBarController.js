import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import ScrollableTabView ,{DefaultTabBar, } from 'react-native-scrollable-tab-view';
import HTabBar from './HTabBar'

export default class HTabBarController extends Component {
    static defaultProps = {
        activeColor: "#2096F3",
        inactiveColor: "#B7B7B7",
        ref: "tabView",
        locked: true,
        scrollWithoutAnimation: true,
        tabBarPosition: 'bottom'
    }

    render() {
        return (
            <ScrollableTabView
                renderTabBar={ () => 
                    <HTabBar iconNames={React.Children.map(this.props.children,(child)=>child.props.icon)} 
                             iconSize={24} 
                             activeTextColor={this.props.activeColor} 
                             inactiveTextColor={this.props.inactiveColor}/>
                }
                {...this.props}
            >
                {this.props.children}
            </ScrollableTabView>
        );
    }
}