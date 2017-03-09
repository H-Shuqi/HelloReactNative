import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import MapViewController from '../Map/MapViewController'

export default class HomeViewController extends Component {
    static defaultProps = {
      title: "首页"
    }

    constructor(props){
        super(props);

        this.render.bind(this);
        this.rightNavigatorItem.bind(this);
    }

    rightNavigatorItem() {
        return (
            <TouchableOpacity onPress={()=>{this.props.navigator.push({Component:MapViewController})}}>
                <Text style={[styles.navItem, styles.navBarText]}>
                    详情
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                <View style={{backgroundColor:'#fec',height:40}}>

                </View>
            </View>
        );
    }
}

const styles = {
    mainView : {
        backgroundColor:'#F5F5F5',
        flex:1
    },
    navItem: {
        paddingRight:8,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems:'center'
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
        alignSelf:'center',
    }
}