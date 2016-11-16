import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './style'

class CommentItem extends React.Component {
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
      <div className="comment-item" {...this.props}>
        <div className="detail-about">
          <Link to="/">
            <img src="" />
            <cite>
              贤心<em>管理员</em>
            </cite>
          </Link>
          <div className="detail-hits">
            <span>4天前</span>
          </div>
        </div>
        <p>这是1.03情况下，拖动窗口后，关闭按钮错误</p>
        <div className="detail-reply">
          <a href="javascript:;"><i></i>89</a>
          <a href="javascript:;"><i></i>回复</a>
        </div>
      </div>
    )
  }
}

export default CommentItem
