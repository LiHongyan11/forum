import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Breadcrumb, Input, Button } from '../../components'

import { userLogin } from '../../actions/user'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  handleChange(val, name) {
    this.setState({
      [name]: val,
    })
  }

  handleSubmit() {
    const { username, password } = this.state;
    this.props.userLogin({ username, password });
  }

  render() {
    return (
      <div className="login">
        <div className="main">
          <Breadcrumb.group>
            <Breadcrumb><Link to="/">首页</Link></Breadcrumb>
          </Breadcrumb.group>
          <Input label="邮箱" placeholder="请输入邮箱" onChange={(val) => this.handleChange(val, 'username')} />
          <Input label="密码" type="password" placeholder="请输入密码" onChange={(val) => this.handleChange(val, 'password')} />
          <div className="btns">
            <Button onClick={() => this.handleSubmit()}>立即登录</Button>
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
    userLogin,
  })(Login)
