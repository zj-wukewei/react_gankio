/**
 * Created by wukewei on 16/12/7.
 * @flow
 */
import React, { Component } from 'react';
import Spinner from './Spinner';
import MeiZhiItem from './MeiZhiItem';
import type {MeiZhi} from '../flowtype/index';

type Props = {
  list : Array<MeiZhi>,
  fetchDataCallback : (pageSize: number) => void
};

const pageSize: number = 1;

class MeiZhiList extends Component {

  state: {
    list: Array<MeiZhi>
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.props.fetchDataCallback(pageSize);
  }

  renderContent() {
    const list = this.props.list;
    const items = [];
    list.map((meizhi: MeiZhi) => {
      items.push(
        <MeiZhiItem
          key={meizhi._id}
          meizhi={meizhi}/>
      );
    });
    return items;
  }

  render() {
    const list = this.props.list;
    if (list && list.length > 0) {
      return (
        <div>
          {this.renderContent()}
        </div>
      )
    } else {
      return (<Spinner />);
    }
  }
}

export default MeiZhiList;
