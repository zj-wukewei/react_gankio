//@flow
import {connect} from 'react-redux';
import MeiZhiList from '../components/MeiZhiList';
import {
  thunkFetchHistoryList
} from '../actions/history';
import {
  thunkFetchMeiZhiList
} from '../actions/meizhi';
import {List} from 'immutable';

const mapStateToProps = (state) => {
  return {
    list: state.get('meiZhiReducer').get('results', List()).toArray(),
    isFetching: state.get('meiZhiReducer').get('isFetching')
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataCallback: (pageSize: number) => {
      dispatch(thunkFetchMeiZhiList(pageSize));
    }
  }
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MeiZhiList);
export default App;
