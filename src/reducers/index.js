import { combineReducers } from 'redux-immutable';
import {historyReducer, meiZhiReducer, environmentReducer} from './mainReducers';

const rootReducer = combineReducers({
  historyReducer,
  environmentReducer,
  meiZhiReducer
});

export default rootReducer;
