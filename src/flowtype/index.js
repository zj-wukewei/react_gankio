/**
 * Created by wukewei on 16/12/7.
 * @flow
 */

export type Response = {
  data : GankResponse,
  status : number,
  statusText : string
};

export type GankResponse = {
  error : boolean,
  results : Array<Object>
};

export type MeiZhi = {
  _id: string,
  createdAt: string,
  desc: string,
  publishedAt: string,
  source: string,
  type: string,
  url: string,
  used: boolean,
  who: string
};