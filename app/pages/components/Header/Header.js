import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// import { Icon } from 'antd'
import './style'

class Header extends React.Component {
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
      <div className="header">
        <div className="main">
          <Link to="/"></Link>
          <div className="nav">
            <Link to="/">
              <i></i>
              问答
            </Link>
            <Link to="/">
              <i></i>
              框架
            </Link>
          </div>
          <div className="nav-user">
            <Link className="unlogin" to="/"><i></i></Link>
            <span>
              <Link to="/login">登入</Link>
              <Link to="/">注册</Link>
            </span>
            <p className="out-login">
              <Link to="/"></Link>
              <Link to="/"></Link>
            </p>
          </div>
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
})(Header)
