/**
 * Created by wukewei on 16/12/8.
 * @flow
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class Footer extends Component {
  render() {
    var arr = [];
    arr[this.props.index] = true;
    return (
      <div className="common-footer">

        <li className={`common-footer-li ${(arr[0] ? ' active' : '')}`}>

          <i className="iconfont icon-shouye-copy-copy"/>
          <Link to="/">
            首页
          </Link>
        </li>
        <li className={`common-footer-li ${(arr[1] ? ' active' : '')}`}>
          <i className="iconfont icon-tupian"/>
          <Link to="/home">
            图片
          </Link>
        </li>
        <li className={`common-footer-li ${(arr[2] ? ' active' : '')}`}>
          <i className="iconfont icon-android"/>
          <Link to="/android">
            android
          </Link>
        </li>
        <li className={`common-footer-li ${(arr[3] ? ' active' : '')}`}>
          <i className="iconfont icon-ios"/>
          <Link to="/ios">
            ios
          </Link>
        </li>
      </div>
    );
  }
}

export default Footer;