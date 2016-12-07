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