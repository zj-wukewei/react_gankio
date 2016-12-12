import { combineReducers } from 'redux-immutable';
import {historyReducer, meiZhiReducer, environmentReducer, androidReducer} from './mainReducers';

const rootReducer = combineReducers({
  historyReducer,
  environmentReducer,
  androidReducer,
  meiZhiReducer
});

export default rootReducer;
