/**
 * Created by wukewei on 16/12/7.
 * @flow
 */

import {
  fetchHistoryList,
  dispatchResponse
} from './api';

import type {GankResponse} from '../flowtype/index';


export const thunkFetchHistoryList = () => {
  return (dispatch: (action: Object) => void) => {
    return fetchHistoryList()
      .then(response =>
        dispatchResponse(response, dispatch, fetchedHistoryList)
      );
  }
}

const fetchedHistoryList = (response: GankResponse) => {
  return {
    type: 'FETCHED_FEED_LIST',
    results: response.results
  }
}