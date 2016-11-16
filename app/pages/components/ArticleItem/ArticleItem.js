import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// import { Icon } from 'antd'
import './style'

class ArticleItem extends React.Component {
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
      <li className="article-item">
        <h5><Link to="/detail"><span>推广</span>即将直播 | 打不死的DNS炼成揭秘：DNS安全之道</Link></h5>
        <div className="article-info">
          <a href="javascript:;"><img src="" /></a>
          <span>作者： XXXX</span>
          <span><i></i>18989人浏览</span>
        </div>
        <p>高可用架构一直都是云计算技术圈的实践热点，尤其是在互联网应用的典型场景下。云栖社区特别盘点出多位业内技术专家的实践分享干货，希望能帮助同样有此痛点的朋友们。</p>
        <div className="tags">
          <a href="javascript:;">架构</a>
        </div>
      </li>
    )
  }
}

export default ArticleItem
