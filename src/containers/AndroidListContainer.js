/**
 * Created by wukewei on 16/12/7.
 * @flow
 */
import {connect} from 'react-redux';
import Android from '../components/AndroidList';
import {
  thunkFetchAndroidList
} from '../actions/android';
import {List} from 'immutable';

const mapStateToProps = (state) => {
  return {
    list: state.get('androidReducer').get('results', List()).toArray(),
    isFetching: state.get('androidReducer').get('isFetching')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataCallback: (pageSize: number) => {
      dispatch(thunkFetchAndroidList(pageSize));
    }
  }
};

const AndroidListContainer = connect(
  mapStateToProps,
  mapDispatchToProps)
(Android);

export default AndroidListContainer;
