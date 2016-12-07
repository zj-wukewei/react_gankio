/**
 * Created by wukewei on 16/12/7.
 * @flow
 */

import {List, Map} from 'immutable';

export const historyReducer = (state: Object = Map(), action: Object) => {
  switch (action.type) {
    case 'FETCHED_HISTORY_LIST':
      console.log("historyReducer success! : " + action.results.length);
     return state.set('results', List(action.results));
      // state.get('results', List()).concat(List(action.results));
    default:
      return state;
  }
};

export const meiZhiReducer = (state: Object = Map(), action: Object) => {
  switch (action.type) {
    case 'FETCHED_MEIZHI_LIST':
      console.log("meiZhiReducer success! : " + action.results.length);
      state = state.set('results', List(action.results));
      return state;
    default:
      return state;
  }
};