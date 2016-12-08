/**
 * Created by wukewei on 16/12/7.
 * @flow
 */
import React, { Component } from 'react';
import Spinner from './Spinner';
import type {MeiZhi} from '../flowtype/index';

type Props = {
  meizhi: MeiZhi
};

class MeiZhiItem extends Component {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const meizhi: MeiZhi = this.props.meizhi;
    return (
      <div className="meizhi-list-item">
        <div
          className="meizhi-list-item__image"
          style={{ backgroundImage: `url(${meizhi.url})` }}
        />
        {meizhi.desc}
      </div>
    );
  }
}


export default MeiZhiItem;