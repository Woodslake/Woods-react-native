/**
 * Created by Woodslake on 2016/12/9.
 */

import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

export default class Bananas extends Component {
    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
                <Text>hello world !</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
            </View>
        );
    }
}