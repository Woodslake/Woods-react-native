/**
 * Created by Woodslake on 2016/12/16.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

class Login extends Component {
    constructor(props){
        super(props);
    }

    login(name, type = 'Normal'){

    }

    register(){

    }

    forget(){

    }

    render(){
        let bg = require('./img/login_bg.png');
        let logo = require('./img/logo_login.png');
        return(
            <View>
                <Image source={bg} style={styles.screen} resizeMode='contain'>
                    <Image source={logo} style={styles.logoImg} resizeMode = 'contain'/>
                    <TextInput style={[styles.inputStyle,{marginTop: 20}]}
                               placeholder='请输入手机号码'
                               clearButtonMode ='while-editing'/>
                    {/*<View style={styles.viewStyle}></View>*/}
                    <TextInput style={[styles.inputStyle,{marginTop: 8}]}
                               placeholder="登陆密码"
                               password = 'true'
                               clearButtonMode ='while-editing'/>
                    <View style={[style = styles.view1Style,{flexDirection: 'row'}]}>
                        <TouchableOpacity onPress={()=>this.register()}>
                            <Text style={{color: 'gray'}}>马上注册</Text>
                        </TouchableOpacity>
                        <Text> | </Text>
                        <TouchableOpacity onPress={()=>this.forget()}>
                            <Text style={{color: 'orange'}}>忘记密码</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={[{color: 'white'}, {fontSize: 20}, {textAlign: 'center'}]}>登录</Text>
                    </TouchableOpacity>
                </Image>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    screen: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    },

    logoImg:{
        width:150,
        height:243/723 * 150,
        marginTop:100,
        marginLeft:(Dimensions.get('window').width - 150)/2,
    },
    inputStyle: {
        // alignItems: 'center',
        // justifyContent:'center',
        // 间距
        // marginTop: 100,
        // 背景颜色
        // backgroundColor: 'red',
        marginLeft:20,
        marginRight:20,
        // 边框
        // borderWidth: 1,
        // 宽度
        // width: Dimensions.get('window').width - 40,
        // 高度
        height: 44,
        borderColor: 'orange',
        fontSize: 14
    },
    viewStyle:{
        height:1,
        backgroundColor: 'orange',
        marginLeft:20,
        marginRight:20
    },
    view1Style:{
        marginLeft:Dimensions.get('window').width - 70 - 60 - 20,
    },
    btn:{
        // marginLeft:(Dimensions.get('window').width)/2 - 20,
        marginTop: 20,
        width: Dimensions.get('window').width - 40,
        backgroundColor:'orange',
        alignSelf: 'center',
        padding: 5
    },
    // text:{
    //     color: 'orange'
    // }
});

export default Login;