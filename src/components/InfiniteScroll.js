/**
 * Created by wukewei on 16/12/8.
 * https://github.com/andrewngu/sound-redux
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  scrollFunc: PropTypes.func.isRequired,
};

class InfiniteScroll extends Component {

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    const el = ReactDOM.findDOMNode(this.refs.scroll);
    el.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    const el = ReactDOM.findDOMNode(this.refs.scroll);
    el.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    const el = ReactDOM.findDOMNode(this.refs.scroll);
    if (el.scrollTop >= (el.scrollHeight - el.offsetHeight - 200)) {
      this.props.scrollFunc();
    }
  }

  render() {
    return (
      <div className={this.props.className} ref="scroll">
        {this.props.children}
      </div>
    );
  }

}

InfiniteScroll.propTypes = propTypes;

export default InfiniteScroll;
