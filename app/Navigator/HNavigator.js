import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Icon from '../../node_modules/react-native-vector-icons/Ionicons';
import MapViewController from '../Map/MapViewController'

export default class HNavigator extends Component {
    static defaultProps = {
        rootViewController: React.PropTypes.Component
    }

    constructor(props){
        super(props);
        this.state = {
            viewControllers:[React.createElement(props.rootViewController,null,null)]
        }
    }

    render() {
        return (
                <Navigator
                    routeStack = {this.state.viewControllers}
                    initialRoute = {{component:this.state.viewControllers[0],index:0}}
                    renderScene = {(route, navigator) => route.navigator=navigator}
                    navigationBar = {
                        this.props.navigationBar ? this.props.navigationBar :
                        <Navigator.NavigationBar style={styles.navBar}
                            routeMapper = {new NavigationBarRouteMapper()}
                        />
                    }
                />
        );
    }
}


class NavigationBarRouteMapper {
    //Native Navigation Button item - Left
    LeftButton(route, navigator, index, navState) {
        let previousRoute = navState.routeStack[index - 1];
        let scene = navState.routeStack[index];
        if (previousRoute == undefined) {
            return null;
        }
        var isCustomLeft
        if (typeof scene.leftNavigatorItem != 'function') {
            return null;
        } else {
            let leftItem = scene.leftNavigatorItem();
            if (leftItem == undefined) {
                return null;
            }
        }

        return (
            <TouchableOpacity onPress={route.leftNavigatorItemPress} style={[styles.navBarButton, styles.navBarButtonLeft]}>
                <Icon name={"ios-arrow-back"} size={30} color={"white"} style={[styles.navItem,{paddingTop:7}]} />
                <Text style={[styles.navItem, styles.navBarText]}>
                    {previousRoute.title}
                </Text>
            </TouchableOpacity>
        );
    }

    //Native Navigation Button item - Right
    RightButton(route, navigator, index, navState) {
        if (route.id === 'detail') {
            return null;
        }
        return (
            <TouchableOpacity onPress={route.rightNavigatorItemPress} style={[styles.navBarButton, styles.navBarButtonRight]}>
                <Text style={[styles.navItem, styles.navBarText]}>
                    详情
                </Text>
            </TouchableOpacity>
        );
    }

    //标题
    Title(route, navigator, index, navState) {
        return (
            <Text style={[styles.navItem, styles.navBarText, styles.navBarTitleText]}>
                {route.title}
            </Text>
        );
    }
}

class HNavigatorButtomItem {
    static defaultProps = {
      title: React.PropTypes.string,
    }
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#2096F3',
        justifyContent: 'center'
    },
    navItem: {
        paddingHorizontal: 3,
        justifyContent: 'center'
    },
    navBarText: {
        color: 'white',
        fontSize: 16,
        height: 40,
        lineHeight: 40,
        flexWrap: 'nowrap'
    },
    navBarTitleText: {
        fontWeight: '500',
    },
    navBarButton: {
        paddingLeft: 10,
        flexWrap: 'nowrap',
        justifyContent: 'center'
    },
    navBarButtonRight: {
        flexDirection: 'row-reverse'
    },
    navBarButtonLeft: {
        flexDirection: 'row'
    }
});