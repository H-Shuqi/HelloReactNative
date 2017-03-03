const React = require('react');
const ReactNative = require('react-native');
const {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} = ReactNative;

import Icon from '../../node_modules/react-native-vector-icons/Ionicons';

const HTabBar = React.createClass({
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: View.propTypes.style,
        renderTab: React.PropTypes.func,
        iconSize: React.PropTypes.number,
        iconNames: React.PropTypes.array,
    },
 
    getDefaultProps() {
        return {
            iconSize: 24,
            activeTextColor: 'navy',
            inactiveTextColor: 'black',
            backgroundColor: null,
            textStyle: {
                
            }
        };
    },

    renderTabOption(name, page) { },

    renderTab(name, iconName, page, isTabActive, onPressHandler) {
        const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
        const textColor = isTabActive ? activeTextColor : inactiveTextColor;
        const fontWeight = isTabActive ? 'bold' : 'normal';

        return  <TouchableOpacity key={page} style={{flex: 1, }} onPress={() => onPressHandler(page)} >
                    <View style={[styles.tab, this.props.tabStyle, ]}>
                        <Icon name={iconName} size={this.props.iconSize} color={textColor} />
                        <Text style={[{color: textColor, fontWeight,}, textStyle, ]} >
                            {name}
                        </Text>
                    </View>
                </TouchableOpacity>;
    },

    render() {
        return (
            <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor }, this.props.style, ]}>
                {
                    this.props.tabs.map((name, page) => {
                        const isTabActive = this.props.activeTab === page;
                        const renderTab = this.props.renderTab || this.renderTab;
                        return renderTab(name, this.props.iconNames[page], page, isTabActive, this.props.goToPage);
                    })
                }
            </View>
        );
    },
});

const styles = StyleSheet.create({
  tabs :{
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 4,
    borderColor: '#ccc',
  },
  tab: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	paddingBottom: 10,
  },
});

module.exports = HTabBar;
