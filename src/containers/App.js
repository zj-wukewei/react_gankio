/**
 * Created by wukewei on 16/12/7.
 * @flow
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { initEnvironment } from '../actions/environment';
import {NavBar, Icon} from 'antd-mobile';

class AppContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initEnvironment());
  }

  render() {
    const {width, height} = this.props;
    return (
      <div className="content" style={{ height: `${height}px`, width: `${width}px` }}>
        <div>
          <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
          >NavBar</NavBar>
        </div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    width: state.get('environmentReducer').get('width'),
    height: state.get('environmentReducer').get('height')
  };
};

export default connect(mapStateToProps)(AppContainer);
