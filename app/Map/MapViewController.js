import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class MapViewController extends Component {
    static defaultProps = {
      title: "地图"
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Text>地图</Text>
            </View>
        );
    }
}

const styles = {
    mainView : {
        backgroundColor:'#f00',//'#F5F5F5',
        flex:1
    }
}