import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Banner } from '../'
import './style'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const {
    } = this.props;
    return (
      <div className="edge">
        <Banner>月度雷锋 - TOP 12</Banner>
        <div className="user-looking">
          <Link to="/">
            <img src="" />
            <cite>纸飞机</cite>
            <span>2323次回答</span>
          </Link>
          <Link to="/">
            <img src="" />
            <cite>纸飞机</cite>
            <span>2323次回答</span>
          </Link>
          <Link to="/">
            <img src="" />
            <cite>纸飞机</cite>
            <span>2323次回答</span>
          </Link>
          <Link to="/">
            <img src="" />
            <cite>纸飞机</cite>
            <span>2323次回答</span>
          </Link>
          <Link to="/">
            <img src="" />
            <cite>纸飞机</cite>
            <span>2323次回答</span>
          </Link>
        </div>
        <Banner>最近热帖</Banner>
        <ol className="last-list">
          <li><Link to="/">layer发布 3.0，2016年终巨献，一次全方位的增强</Link><span><i></i> 3940</span></li>
          <li><Link to="/">layer发布 3.0，2016年终巨献，一次全方位的增强</Link><span><i></i> 3940</span></li>
          <li><Link to="/">layer发布 3.0，2016年终巨献，一次全方位的增强</Link><span><i></i> 3940</span></li>
        </ol>
      </div>
    )
  }
}

export default Sidebar
