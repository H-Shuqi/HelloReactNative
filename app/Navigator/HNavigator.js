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

export default class HNavigator extends Component {
    static defaultProps = {
        rootViewController: React.PropTypes.Component
    }

    constructor(props){
        super(props);
        this.state = {
            viewControllers:[{viewController:this.props.rootViewController,index:0}]
        }
    }

    render() {
        return (
                <Navigator
                    routeStack = {this.state.viewControllers}
                    initialRoute = {this.state.viewControllers[0]}
                    renderScene = {(route, navigator) => {
                        route.viewController.navigator = navigator;
                        return route.viewController;
                    }}
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
        let scene = navState.routeStack[index].viewController;
        
        if (typeof scene.leftNavigatorItem == 'function') {
            let customLeftItem = scene.leftNavigatorItem();
            if(customLeftItem != undefined) {
                return customLeftItem;
            }
        }

        let previousRoute = navState.routeStack[index - 1];
        if (previousRoute == undefined) {
            return null;
        }
        return (
            <TouchableOpacity onPress={()=>navigator.pop()} style={[styles.navBarButton, styles.navBarButtonLeft]}>
                <Icon name={"ios-arrow-back"} size={30} color={"white"} style={[styles.navItem,{paddingTop:7}]} />
                <Text style={[styles.navItem, styles.navBarText]}>
                    {previousRoute.viewController.props.title}
                </Text>
            </TouchableOpacity>
        );
    }

    //Native Navigation Button item - Right
    RightButton(route, navigator, index, navState) {
        let scene = navState.routeStack[index].viewController;

        if (typeof scene.rightNavigatorItem == 'function') {
            return scene.rightNavigatorItem();
        }

        return null;
    }

    //标题
    Title(route, navigator, index, navState) {
        let scene = navState.routeStack[index].viewController;
        return (
            <Text style={[styles.navItem, styles.navBarText, styles.navBarTitleText]}>
                {scene.props.title}
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