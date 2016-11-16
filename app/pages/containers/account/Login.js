import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Breadcrumb, Input, Button } from '../../components'

class Login extends React.Component {
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
      <div className="login">
        <div className="main">
          <Breadcrumb.group>
            <Breadcrumb><Link to="/">首页</Link></Breadcrumb>
          </Breadcrumb.group>
          <Input label="邮箱" placeholder="请输入邮箱" />
          <Input label="密码" placeholder="请输入密码" />
          <div className="btns">
            <Button>立即登录</Button>
            <Link to="/">忘记密码？</Link>
          </div>
          <div className="form-item">
            <span>或者使用社交账号登入</span>
            <Link to="/"></Link>
            <Link to="/"></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    
  }), { 
})(Login)
