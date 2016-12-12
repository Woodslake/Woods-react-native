/**
 * Created by Woodslake on 2016/12/12.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import PageList from './PageList'

class App extends Component {

    render() {
        return(
            <Navigator
                initialRoute={{
                    component: PageList,
                    name: 'PageList'
                }}
                configureScene={() => {
                        return Navigator.SceneConfigs.HorizontalSwipeJump
                }}
                renderScene={(route, navigator) => {
                    if(route.component){
                        return <route.component {...route.passProps} navigator={navigator} />
                    }
                }}
            />
        );
    }
}

AppRegistry.registerComponent('Woods', () => App);