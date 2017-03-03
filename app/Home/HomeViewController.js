import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class HomeViewController extends Component {
    static defaultProps = {
      title: "首页"
    }

    rightNavigatorItem() {
        return (
            <Text>右边啊</Text>
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                <View>
                    <Text>这里是首页啊！！！！</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    mainView : {
        marginTop: 64
    }
}