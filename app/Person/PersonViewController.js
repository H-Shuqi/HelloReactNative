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
            <View style={styles.mainView}>
                <Text>Person</Text>
            </View>
        );
    }
}

const styles = {
    mainView : {
        // marginTop: 64,
        backgroundColor:'#F5F5F5',
        flex:1
    }
}