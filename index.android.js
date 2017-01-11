/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
} from 'react-native';

import MainPage from './js/MainPage';

export default class RxJSDemo extends Component {
    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{name:'main',component:MainPage}}
                renderScene={(route,navigator)=>{
                    return (<route.component {...route.params} name={route.name} navigator={navigator}/>);
                }}
            >
            </Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('RxJSDemo', () => RxJSDemo);
