import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Sidebar, Banner, CommentItem, Textarea, Button } from '../../components'

class Detail extends React.Component {
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
    return (
      <div className="artical-box">
        <div className="main">
          <div className="wrap">
            <div className="content detail">
              <h1>layer发布 3.0，2016年终巨献，一次全方位的增强</h1>
              <div className="detail-tip">
                <span>精贴</span>
                <span>未结贴</span>
                <div className="detail-hit">
                  <span><i></i>89</span>
                  <span><i></i>189</span>
                </div>
              </div>
              <div className="detail-about">
                <Link to="/">
                  <img src="" />
                  <cite>
                    贤心<em>发布于6天前</em>
                  </cite>
                </Link>
                <div className="detail-hits">
                  <span>悬赏：5飞吻</span>
                </div> 
              </div>
              <div className="detail-body">
                <p>
                  在决定这个大版本更新之前，很多人建议我应该把时间放在刚刚发布的Layui上，因为layer已经比较成熟了，没必要再更新。但是，坚持layer是一种情怀，为了对得起“国内最多人使用的弹层组件”，我仍然义无反顾地追寻一个尽可能更完备的她。于是我把这种期许赋予在了layer 3.0上，我希望它会是一个更成熟的方案，在它所服务的领域，竭力做到极致。
                </p>
              </div>
              <Banner style={{paddingTop: '10px', paddingBottom: '10px'}}>热忱回答（48）</Banner>
              <div className="comment-list">
                <CommentItem />
              </div>
              <Textarea placeholder="我要回答" />
              <Button>提交回答</Button>
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
    
  }), { 
})(Detail)
