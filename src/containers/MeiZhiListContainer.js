/**
 * Created by wukewei on 16/12/7.
 * @flow
 */
import {connect} from 'react-redux';
import MeiZhiList from '../components/MeiZhiList';
import {
  thunkFetchMeiZhiList
} from '../actions/meizhi';
import {List} from 'immutable';

const mapStateToProps = (state) => {
  return {
    list: state.get('meiZhiReducer').get('results', List()).toArray(),
    isFetching: state.get('meiZhiReducer').get('isFetching'),
    noMore: state.get('meiZhiReducer').get('noMore')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataCallback: (pageSize: number) => {
      dispatch(thunkFetchMeiZhiList(pageSize));
    }
  }
};

const MeiZhiListContainer = connect(
  mapStateToProps,
  mapDispatchToProps)
(MeiZhiList);

export default MeiZhiListContainer;
