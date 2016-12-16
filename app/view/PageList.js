/**
 * Created by Woodslake on 2016/12/12.
 */

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';

import HelloWorld from './HelloWorld'
import Bananas from './Bananas'
import Blink from './Blink'
import LotsOfStyles from './LotsOfStyles'
import FixedDimensionBasics from './FixedDimensionBasics'
import FlexDirectionBasics from './FlexDirectionBasics'
import JustifyContentBasics from './JustifyContentBasics'
import PizzaTranslator from './PizzaTranslator'
import Login from './Login'

export  default  class PageList extends Component {

    _onPress(name, type = 'Normal'){
        const { navigator } = this.props;
        if(navigator){
            // navigator.push({
            //     component:HelloWorld,
            //     passProps: {
            //         name: name
            //     },
            //     type: type
            // })
            if(name == 'HelloWorld'){
                navigator.push({
                    component:HelloWorld,
                    passProps: {
                        name: name
                    },
                    type: type
                })
            }else if(name == 'Props'){
                navigator.push({
                    component:Bananas,
                    passProps: {
                        name: name
                    },
                    type: type
                })
            }else if(name == 'State'){
                navigator.push({
                    component:Blink,
                    passProps: {
                        name: name
                    },
                    type: type
                })
            }else if(name == 'Styles'){
                navigator.push({
                    component:LotsOfStyles,
                    passProps: {
                        name: name
                    },
                    type: type
                })
            }else if(name == 'Dimens'){
                navigator.push({
                    component:FixedDimensionBasics,
                    passProps: {
                        name: name
                    },
                    type: type
                })
            }else if(name == 'Flexbox'){
                navigator.push({
                    component:FlexDirectionBasics,
                    passProps: {
                        name: name
                    },
                    type: type
                })
            }else if(name == 'Justify'){
                navigator.push({
                    component:JustifyContentBasics,
                    passProps: {
                        name: name
                    },
                    type: type
                })
            }else if(name == 'TextInput'){
                navigator.push({
                    component:PizzaTranslator,
                    passProps: {
                        name: name
                    },
                    type: type
                })
            }else if(name == 'Login'){
                navigator.push({
                    component:Login,
                    passProps: {
                        name: name
                    },
                    type: type
                })
            }
        }
    }

    render() {
        return(
            <View>
                <TouchableOpacity onPress={()=>this._onPress('HelloWorld')}>
                    <Text style={styles.text}>HelloWorld</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPress('Props')}>
                    <Text style={styles.text}>Props</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPress('State')}>
                    <Text style={styles.text}>State</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPress('Styles')}>
                    <Text style={styles.text}>Styles</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPress('Dimens')}>
                    <Text style={styles.text}>Dimens</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPress('Flexbox')}>
                    <Text style={styles.text}>Flexbox</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPress('Justify')}>
                    <Text style={styles.text}>Justify</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPress('TextInput')}>
                    <Text style={styles.text}>TextInput</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPress('Login')}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        // fontWeight: 'bold',
        fontSize: 30,
        padding: 5,
    },
});

