/**
 * Created by wukewei on 16/12/7.
 * https://github.com/andrewngu/sound-redux
 * @flow
 */
import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import MeiZhiList from '../containers/MeiZhiList';
import Android from '../components/Android';
import ToolBar from '../components/ToolBar';

class Home extends Component {

  state: {
    title: string
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      title: '妹纸'
    }
  }


  renderContent(pageText: string) {
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
            title={this.state.title}
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
            icon={require('../../server/pic/home.png')}
            selectedIcon={require('../../server/pic/selected_home.png')}
            selected={this.state.title === '首页'}
            onPress={() => {
            this.setState({
              title: '首页'
            });
          }}
          >
            {this.renderContent('生活')}
          </TabBar.Item>
          <TabBar.Item
            icon={require('../../server/pic/meizhi.png')}
            selectedIcon={require('../../server/pic/selected_meizhi.png')}
            title="妹纸"
            key="妹纸"
            selected={this.state.title === '妹纸'}
            onPress={() => {
            this.setState({
              title: '妹纸'
            });
          }}
          >
            <MeiZhiList />
          </TabBar.Item>
          <TabBar.Item
            icon={require('../../server/pic/android.png')}
            selectedIcon={require('../../server/pic/selected_android.png')}
            title="android"
            key="android"
            selected={this.state.title === 'android'}
            onPress={() => {
            this.setState({
              title: 'android'
            });
          }}
          >
            <Android />
          </TabBar.Item>
          <TabBar.Item
            icon={require('../../server/pic/ios.png')}
            selectedIcon={require('../../server/pic/selected_ios.png')}
            title="ios"
            key="ios"
            selected={this.state.title === 'ios'}
            onPress={() => {
            this.setState({
              title: 'ios'
            });
          }}
          >
            {this.renderContent('我的')}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  };
}

export default Home;
