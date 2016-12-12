/**
 * Created by Woodslake on 2016/12/12.
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import MyScene from './MyScene';

class SimpleNavigationApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component: Home, name: 'home', title: 'My Initial Scene', index: 0 }}
                configureScene={() => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={(route, navigator) =>{
                    let Component = route.component;
                    if(route.component) {
                      return <Component {...route.params} navigator={navigator} />
                    }
                }
                /*
                    <MyScene
                    title={route.title}

                    // Function to call when a new scene should be displayed
                    onForward={ () => {
                      const nextIndex = route.index + 1;
                      navigator.push({
                        title: 'Scene ' + nextIndex,
                        index: nextIndex,
                      });
                    }}

                    // Function to call to go back to the previous scene
                    onBack={() => {
                      if (route.index > 0) {
                        navigator.pop();
                      }
                    }}
                    />
                */
            }
            />
        )
    }
}

class Home extends Component {
    render(){
        return (
            <View>
                <Text>hello world !</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Woods', () => SimpleNavigationApp);