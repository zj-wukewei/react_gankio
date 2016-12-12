/**
 * Created by wukewei on 16/12/7.
 * @flow
 */

import axios from 'axios';
import type {Response, GankResponse} from '../flowtype';

const client = axios.create({
  baseURL: 'http://gank.io/api',
  timeout: 2000,
});

client.interceptors.response.use(response => {
  console.log('[axios] ---Response received---');
  console.log('[axios] response:');
  console.log(response.data);
  console.log('[axios] (end)');
  return response;
}, error => {
  console.log(`[axios] ---Response error---`);
  console.log('[axios] code: ' + error.response.status);
  console.log('[axios] url: ' + error.response.request._url);
  console.log('[axios] (end)');
});

export const apiURL = {
  getHistory: 'history/content/5/1',
  getMeiZhi: 'data/福利/20/',
  getAndroid: 'data/Android/20/',
};

export function fetchHistoryList(): Promise<Response> {
  return client.get(apiURL.getHistory);
}

export function fetchAndroidList(pageSize: number): Promise<Response> {
  return client.get(apiURL.getAndroid + pageSize);
}

export function fetchMeiZhiList(pageSize: number): Promise<Response> {
  return client.get(apiURL.getMeiZhi + pageSize);
}

export function dispatchResponse(response: Response,
                                 dispatch: (action: Object) => void,
                                 sAction: (resp: GankResponse) => Object,
                                 eAction ?: (resp: Response) => Object): void {
  if (response) {
    if (response.data && !response.data.error) {
      dispatch(sAction(response.data));
      return;
    }
  }
  // error happens.
  if (eAction) {
    dispatch(eAction(response));
  }
}
