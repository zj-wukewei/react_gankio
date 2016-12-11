/**
 * Created by wukewei on 16/12/8.
 *@flow
 */
import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './containers/App';
import MeiZhiList from './containers/MeiZhiList';
import Home from './components/Home';
import Android from './components/Android';
import Ios from './components/IOS';

class RouterContent extends Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path= '/' component={App}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    );
  }

}

export default RouterContent;