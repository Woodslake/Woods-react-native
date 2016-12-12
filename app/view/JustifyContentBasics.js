/**
 * Created by Woodslake on 2016/12/12.
 */

import React, { Component } from 'react';
import { View } from 'react-native';

export default class JustifyContentBasics extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                //flex-start 从启示位置开始排列，center 居中，flex-end从末尾位置开始排列， space-around 占满居中，space-between占满沿着边框
                justifyContent: 'space-between',
             }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};