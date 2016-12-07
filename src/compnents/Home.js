//@flow
import React, { Component } from 'react';

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
      const list = this.props.list;

      return (
        <div>
          wukewei{list.length}
        </div>
      );
  }
}


export default Home;
