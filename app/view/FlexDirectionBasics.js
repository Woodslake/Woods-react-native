/**
 * Created by Woodslake on 2016/12/12.
 */

import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {
        return (
            // row水平排列, column竖轴排列
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};