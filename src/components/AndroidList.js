/**
 * Created by wukewei on 16/12/7.
 *@flow
 */
import React,{Component} from 'react';
import { ListView } from 'antd-mobile';
import Spinner from "./Spinner";
import type {Android} from '../flowtype/index';
import {PAGE_SIZE} from '../constants/Constants';
import AndroidItem from './AndroidiItem';

type Props = {
  list : Array<Android>,
  isFetching: boolean,
  fetchDataCallback : (pageSize: number) => void
};

let pageSize: number = 1;
let loadMoreTime: number = 0;

class AndroidList extends Component {

  state: {
    dataSource: ListView.DataSource
  };

  constructor(props: Props) {
    super(props);
    this.state =  {
      dataSource:  new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }


  componentDidMount() {
    this.props.fetchDataCallback(pageSize)
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

  renderSpinner() {
    const list = this.props.list;
    const isFetching = this.props.isFetching;

    if (list && list.length > 0 && isFetching) {
      return <Spinner />
    }
    return null;
  }

  renderContent(rowData: Android) {

    return (
       <AndroidItem
         key={rowData._id}
         android={rowData}
       />
    );

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

export default AndroidList;
