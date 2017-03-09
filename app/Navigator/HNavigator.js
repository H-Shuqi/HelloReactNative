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
import HomeViewController from '../Home/HomeViewController'

export default class HNavigator extends Component {
    static propTypes = {
        rootViewController: React.PropTypes.object.isRequired,
        nav: React.PropTypes.object
    }

    constructor(props){
        super(props);

        this.render.bind(this);
        this.pop.bind(this);
        this.push.bind(this);
    }

    render() {
        var hNav = this;
        return (
                <Navigator
                    initialRoute = {this.props.rootViewController}
                    renderScene = {(route, navigator) => {
                        hNav.navigator = navigator;
                        let viewController = <route.Component navigator={hNav} />;
                        route.viewController = viewController;
                        return viewController;
                    }}
                    sceneStyle={{
                        marginLeft: -10,
                        paddingLeft: 10,
                        shadowColor: 'black',
                        shadowOffset: {width: 0, height: 0},
                        shadowOpacity: 0.4,
                        shadowRadius: 3
                    }}
                    navigationBar = {
                        hNav.props.navigationBar ? hNav.props.navigationBar :
                        <Navigator.NavigationBar style={[hnative_styles.navBar,this.props.style]}
                            routeMapper = {new NavigationBarRouteMapper()}
                        />
                    }
                />
        );
    }

    pop(){
        this.navigator.pop();
    }

    push(viewController){
        this.navigator.push(viewController);
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
            <TouchableOpacity onPress={()=>navigator.pop()} style={[hnative_styles.navBarButton, hnative_styles.navBarButtonLeft]}>
                <View style={[hnative_styles.navItem]}>
                    <Icon name={"ios-arrow-back"} size={30} color={"white"} />
                </View>
                <View style={hnative_styles.navItem}>
                    <Text style={hnative_styles.navBarText}>
                        {previousRoute.viewController.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    //Native Navigation Button item - Right
    RightButton(route, navigator, index, navState) {
        let scene = navState.routeStack[index].viewController;

        if (typeof scene.type.prototype.rightNavigatorItem == 'function') {
            let rightItem = scene.type.prototype.rightNavigatorItem.call(scene);
            return (
                <View style={[hnative_styles.navBarButton, hnative_styles.navBarButtonRight]}>
                    {rightItem}
                </View>
            );
        }

        return null;
    }

    //Native Navigation Title item
    Title(route, navigator, index, navState) {
        let scene = navState.routeStack[index].viewController;
        return (
            <View style={[hnative_styles.navItem, hnative_styles.navBarTitle]}>
                <Text style={hnative_styles.navBarText}>
                    {scene.props.title}
                </Text>
            </View>
        );
    }
}

class HNavigatorButtomItem {
    static defaultProps = {
      title: React.PropTypes.string,
    }
}

const hnative_styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#fff',
        flexDirection:"row",//子横向排列
        justifyContent: 'center',//子横向居中
        alignItems:'center'//子垂直居中
    },
    navItem: {
        paddingLeft:8,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems:'center'
    },
    navBarTitle: {
        flex:1
    },
    navBarText: {
        color: 'white',
        fontSize: 16,
        textAlign:'center',
        flexWrap: 'nowrap'
    },
    navBarButton: {
        flex:1,
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignSelf:'center'
    },
    navBarButtonRight: {
        flexDirection: 'row-reverse'
    },
    navBarButtonLeft: {
        flexDirection: 'row'
    }
});