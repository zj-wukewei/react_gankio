/**
 * Created by wukewei on 16/12/7.
 * https://github.com/andrewngu/sound-redux
 * @flow
 */
import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import MeiZhiList from '../containers/MeiZhiList';
import Android from '../components/Android';
import ToolBar from '../components/ToolBar';

class Home extends Component {

  state: {
    selectedTab: string
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      selectedTab: 'meizhi',
    }
  }


  _renderContent(pageText: string) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <ToolBar
            title="首页"
            canBack={false}
          />
        </div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}
          >
            {this._renderContent('生活')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
            title="图片"
            key="图片"
            selected={this.state.selectedTab === 'meizhi'}
            onPress={() => {
            this.setState({
              selectedTab: 'meizhi',
            });
          }}
          >
            <MeiZhiList />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png' }}
            title="android"
            key="android"
            selected={this.state.selectedTab === 'android'}
            onPress={() => {
            this.setState({
              selectedTab: 'android',
            });
          }}
          >
            <Android />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
            title="ios"
            key="ios"
            selected={this.state.selectedTab === 'ios'}
            onPress={() => {
            this.setState({
              selectedTab: 'ios',
            });
          }}
          >
            {this._renderContent('我的')}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  };
}

export default Home;
