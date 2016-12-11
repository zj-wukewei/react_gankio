/**
 * Created by wukewei on 16/12/10.
 * @flow
 */
import React, {Component, PropTypes} from 'react';
import {NavBar} from 'antd-mobile';
import {actions} from 'react-router';
import {hashHistory} from 'react-router';
import Colors from '../constans/Colors';

type Props = {
  title: string,
  onLeftClick: () => void,
  canBack: boolean,
  right: boolean,
}

class ToolBar extends Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const canBack = this.props.canBack;
    let onLeftClick = this.props.onLeftClick;
    let iconName = '';

    if (canBack) {
      iconName = 'left';
    }

    if (canBack && !onLeftClick) {
      onLeftClick = () => {
        hashHistory.goBack();
      };
    }


    return (
      <NavBar iconName={iconName} onLeftClick={onLeftClick} color={Colors.tintColor}>
        {this.props.title}
      </NavBar>
    );
  }
}

export default ToolBar;