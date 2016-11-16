import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Radio, Search, Button, ArticleItem, Banner, Sidebar } from '../../components'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
      searchVal: '',
    }
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onChange(val) {
    this.setState({
      value: val,
    })
    console.log(val)
  }

  handleSearch(val) {
    this.setState({
      searchVal: val,
    });
  }

  render() {
    const {
      value,
    } = this.state;
    return (
      <div className="artical-box">
        <div className="main">
          <div className="wrap">
            <div className="content">
              <div className="list-tab">
                <Radio.Group model={value} onChange={(val) => this.onChange(val)}>
                  <Radio value="0">全部</Radio>
                  <Radio value="1">未结账</Radio>
                  <Radio value="2">已采纳</Radio>
                  <Radio value="3">精贴</Radio>
                </Radio.Group>
                <Search placeholder="搜索内容" onSearch={(val) => this.handleSearch(val)} />
                <Button>发布问题</Button>
              </div>
              <ul>
                <ArticleItem />
                <ArticleItem />
              </ul>
              <a href="javascript:;" className="load-more">点击获取更多精彩内容</a>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    // sign: state.config.sign,
  }), { 
  // getDDSign
})(List)
