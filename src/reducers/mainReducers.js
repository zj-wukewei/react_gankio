/**
 * Created by wukewei on 16/12/7.
 * @flow
 */

import {List, Map} from 'immutable';

export const historyReducer = (state: Object = Map(), action: Object) => {
  switch (action.type) {

    case 'FETCHED_HISTORY_LIST':
     return state.set('results', List(action.results));

    default:
      return state;
  }
};

export const meiZhiReducer = (state: Object = Map(), action: Object) => {
  switch (action.type) {

    case 'FETCHINF_MEIZHI_LIST':
      state = state.set('isFetching', true);
      return state;

    case 'FETCHED_MEIZHI_LIST':
      state = state.set('results', state.get('results', List()).concat(List(action.results))).set('isFetching', false);
      return state;

    default:
      return state;
  }
};

export const environmentReducer = (state: Object = Map(), action: Object) => {
  switch (action.type) {

    case 'CHANGE_WIDTH_AND_HEIGHT':
      console.log('CHANGE_WIDTH_AND_HEIGHT' + action.width + action.height);
      state = state.set('width', action.width).set('height', action.height);
      return state;

    default:
      return state;
  }
};
