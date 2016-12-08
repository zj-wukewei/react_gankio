/**
 * Created by wukewei on 16/12/7.
 * @flow
 */
import React, { Component } from 'react';
import Spinner from './Spinner';
import MeiZhiItem from './MeiZhiItem';
import InfiniteScroll from './InfiniteScroll';
import type {MeiZhi} from '../flowtype/index';
import {throttle} from 'lodash';

type Props = {
  list : Array<MeiZhi>,
  isFetching: boolean,
  fetchDataCallback : (pageSize: number) => void
};

let pageSize: number = 1;

class MeiZhiList extends Component {

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDataCallback(pageSize);
  }

  renderContent() {
    const list = this.props.list;
    return list.map((meizhi: MeiZhi) => {
        return (
          <MeiZhiItem
            key={meizhi._id}
            meizhi={meizhi}
          />
        );
    });
  }

  fetchMeiZhisNextPage() {
      pageSize ++;
      this.props.fetchDataCallback(pageSize);
  }

  renderSpinner() {
    const list = this.props.list;
    const isFetching = this.props.isFetching;

    if (list && list.length > 0 && isFetching) {
      return <Spinner />
    }
    return null;
  }

  render() {
    const list = this.props.list;
    if (list && list.length > 0) {
      return (
        <InfiniteScroll
          className="meizhis"
          scrollFunc={throttle(() => {this.fetchMeiZhisNextPage()}, 1000)}>
          {this.renderContent()}
          {this.renderSpinner()}
        </InfiniteScroll>
      )
    } else {
      return (<Spinner />);
    }
  }
}

export default MeiZhiList;
