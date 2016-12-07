//@flow
import {connect} from 'react-redux';
import Home from '../components/Home';
import {
  thunkFetchHistoryList
} from '../actions/history';
import {List} from 'immutable';

const mapStateToProps = (state) => {
  return {
    list: state.get('historyReducer').get('results', List()).toArray(),
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataCallback: () => {
      dispatch(thunkFetchHistoryList());
    }
  }
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
export default App;
