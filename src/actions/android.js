/**
 * Created by wukewei on 16/12/7.
 * @flow
 */

import {
  fetchAndroidList,
  dispatchResponse
} from './api';

import type {GankResponse} from '../flowtype/index';


export const thunkFetchAndroidList = (pageSize: number) => {
  return (dispatch: (action: Object) => void) => {
    dispatch(fetchingMeiZhiList());
    fetchAndroidList(pageSize)
      .then(response =>
        dispatchResponse(response, dispatch, fetchedAndroidList)
      );
  }
}

const fetchedAndroidList = (response: GankResponse) => {
  return {
    type: 'FETCHED_ANDROID_LIST',
    results: response.results
  }
}

const fetchingMeiZhiList = () => {
  return {
    type: 'FETCHINF_ANDROID_LIST'
  }
}