import { combineReducers } from 'redux-immutable';
import {historyReducer} from './history';

const rootReducer = combineReducers({
  historyReducer
});

export default rootReducer;
