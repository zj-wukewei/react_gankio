//@flow
import React, { Component } from 'react';
import Spinner from './Spinner';

type Props = {
  list : Array<Object>,
  fetchDataCallback : () => void
};

class Home extends Component {

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDataCallback();
  }

  render() {
    return <Spinner />;
  }
}


export default Home;
