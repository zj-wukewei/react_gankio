/**
 * Created by wukewei on 16/12/7.
 * @flow
 */

import {
  fetchMeiZhiList,
  dispatchResponse
} from './api';

import type {GankResponse} from '../flowtype/index';


export const thunkFetchMeiZhiList = (pageSize: number) => {
  return (dispatch: (action: Object) => void) => {
    return fetchMeiZhiList(pageSize)
      .then(response =>
        dispatchResponse(response, dispatch, fetchedMeiZhiList)
      );
  }
}

const fetchedMeiZhiList = (response: GankResponse) => {
  return {
    type: 'FETCHED_MEIZHI_LIST',
    results: response.results
  }
}