/**
 * Created by Woodslake on 2016/12/12.
 */

import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

class ListViewBasics extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'HelloWorld', 'Props', 'State', 'Style', 'Dimens', 'FlexBox', 'TextInput'
            ])
        };
    }
    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Woods', () => ListViewBasics);
