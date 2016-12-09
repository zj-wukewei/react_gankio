/**
 * Created by wukewei on 16/12/7.
 * https://github.com/andrewngu/sound-redux
 *
 */
import React,{Component} from 'react';
import { ListView } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒',
  },

  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '麦当劳邀您过周末',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];


class Android extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      dataSource:  new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }


  componentDidMount() {
    this.setState = {
      dataSource: this.state.dataSource.cloneWithRows(data)
    }
  }


  onEndReached(event) {
    // load new data
    console.log('reach end', event);

  }

  render() {

    const row = (rowData, sectionID, rowID) => {
      return (
        <div key={rowID}
             style={{
            padding: '8px 16px',
            backgroundColor: 'white',
          }}
        >
          <h3 style={{ padding: 2, marginBottom: 8, borderBottom: '1px solid #F6F6F6' }}>
            {rowID}
          </h3>
          <div style={{ display: '-webkit-box', display: 'flex' }}>
            <div style={{ display: 'inline-block' }}>
              <p>wukeweiwekdnak</p>
              <p><span style={{ fontSize: '1.6em', color: '#FF6E27' }}>35</span>元/任务</p>
            </div>
          </div>
        </div>
      );
    };



    return (<div style={{ margin: '0 auto', width: '96%' }}>
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(data)}
        renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '加载中...' : '加载完毕'}
        </div>}
        renderRow={row}
        className="fortest"
        style={{
          height: document.body.clientHeight,
          overflow: 'auto',
          border: '1px solid #ddd',
          margin: '10px 0',
        }}
        pageSize={10}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onScroll={() => { console.log('scroll'); }}
        onEndReachedThreshold={10}
      />
    </div>);
  }
}

export default Android;
