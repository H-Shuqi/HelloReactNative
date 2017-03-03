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
            <View>
                <Text>Map</Text>
            </View>
        );
    }
}