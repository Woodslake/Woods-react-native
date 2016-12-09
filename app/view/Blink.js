/**
 * Created by Woodslake on 2016/12/9.
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {this.setState({ showText: !this.state.showText })}, 1000);
    }

    render(){
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : '';
        return(
            <Text>{display}</Text>
        );
    }
}

export  default class Woods extends Component {
    render(){
        return (
            <View>
                <Blink text='I love to Blink'/>
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}

AppRegistry.registerComponent('Woods', () => Woods);