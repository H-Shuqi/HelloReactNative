import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class PersonViewController extends Component {
    static defaultProps = {
      title: "个人"
    }

    render() {
        return (
            <View>
                <Text>Person</Text>
            </View>
        );
    }
}