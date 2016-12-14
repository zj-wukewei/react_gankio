/**
 * Created by wukewei on 16/12/7.
 * @flow
 */
import React, { Component } from 'react';
import type {Android} from '../flowtype/index';

type Props = {
  android: Android
};

class AndroidItem extends Component {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const android: Android = this.props.android;
    if (android.images && android.images.length > 0) {

      return (
        <div>
          <a className="meizhi-list-item">
            <div
              className="meizhi-list-item__image"
              style={{ backgroundImage: `url(${android.images[0]})` }}
            />
          </a>
          <div>
            {android.images[0]}
          </div>
        </div>
      );

    }


    return (
      <div>
        {android.publishedAt}
      </div>
    );
  }
}


export default AndroidItem;