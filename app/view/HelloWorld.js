/**
 * Created by Woodslake on 2016/12/8.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

export default class Woods extends Component{

    render(){
        return (
            <View>
                <Text>hello world !</Text>
            </View>
        );
    }

}

AppRegistry.registerComponent('Woods', () => Woods);
