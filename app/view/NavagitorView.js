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

class NavagitorView extends Component {

    render() {
        return(
            // <View>
            //     <Text>Home</Text>
            // </View>
            <Navigator
                initialRoute={{
                    component: Home,
                    name: 'Home'
                }}
                configureScene={() => {
                        return Navigator.SceneConfigs.HorizontalSwipeJump
                }}
                renderScene={(route, navigator) => {
                    if(route.component){
                        return <route.component {...route.passProps} navigator={navigator} />
                        {/*return <Home/>*/}
                    }
                }}
            />
        );
    }
}

class Home extends Component {
    _onPress(name, type = 'Normal'){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                component:SecondScene,
                passProps: {
                    name: name
                },
                type: type
            })
        }
    }

    render() {
        return(
            <View>
                <Text>Home</Text>
                <TouchableOpacity onPress={()=>this._onPress('hello')}>
                    <Text>进入下一页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class SecondScene extends Component {

    render(){
        return(
            <View>
                <Text>SecondScene</Text>
                <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
                    <Text >返回上一页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

AppRegistry.registerComponent('Woods', () => NavagitorView);