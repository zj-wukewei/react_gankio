import { combineReducers } from 'redux-immutable';
import {historyReducer, meiZhiReducer} from './mainReducers';

const rootReducer = combineReducers({
  historyReducer,
  meiZhiReducer
});

export default rootReducer;
