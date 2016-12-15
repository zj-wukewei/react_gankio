/**
 * Created by wukewei on 16/12/7.
 *@flow
 */
import React, {Component} from "react";
import Spinner from "./Spinner";
import MeiZhiItem from "./MeiZhiItem";
import type {MeiZhi} from "../flowtype/index";
import {ListView, Toast} from "antd-mobile";
import {PAGE_SIZE} from '../constants/Constants';

type Props = {
  list : Array<MeiZhi>,
  isFetching: boolean,
  noMore: boolean,
  fetchDataCallback : (pageSize: number) => void
};

let pageSize: number = 1;
let loadMoreTime: number = 0;

class MeiZhiList extends Component {

  state: {
    dataSource: ListView.DataSource,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      })
    };
  }


  componentDidMount() {
    this.props.fetchDataCallback(pageSize);
  }

  renderContent(rowData: MeiZhi) {
    return (
          <MeiZhiItem
            key={rowData._id}
            meizhi={rowData}
          />
        );
  }


  renderSpinner() {
    const list = this.props.list;
    const isFetching = this.props.isFetching;

    if (list && list.length > 0 && isFetching) {
      return <Spinner />
    }
    return null;
  }

  onEndReached() {
    // load new data
    const time: number  = (+new Date() ) / 1000;
    if (time - loadMoreTime > 1) {
      pageSize ++;
      loadMoreTime = (+new Date() ) / 1000;
      this.props.fetchDataCallback(pageSize);
    }

  }

  componentWillReceiveProps(nextProps: Props) {
    const isFetching = this.props;
    if (isFetching && !nextProps.isFetching && nextProps.noMore) {
      Toast.info('没有更多数据了');
    }
  }

  render() {
    const list = this.props.list;
    if (list && list.length > 0) {
      return (
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(list)}
          renderFooter={() => this.renderSpinner()}
          renderRow={this.renderContent}
          style={{
          height: document.body.clientHeight - 50,
          overflow: 'auto',
          border: '1px solid #ddd',
          margin: '10px 0',
        }}
          pageSize={PAGE_SIZE}
          scrollRenderAheadDistance={500}
          scrollEventThrottle={20}
          onEndReached={() => this.onEndReached()}
          onEndReachedThreshold={10}
        />
      )
    } else {
      return (<Spinner />);
    }
  }
}

export default MeiZhiList;
