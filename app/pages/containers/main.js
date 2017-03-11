import React from 'react'
import { connect } from 'react-redux'
import { setGlobalHandler } from '../components/XHR'

// Style
// import 'antd/dist/antd.css'
import '../asserts/style/main'

import { Header, Notification } from '../components'

class Index extends React.Component {
  constructor(props) {
    super(props);
    setGlobalHandler(this.onGlobalHandler.bind(this));
    this.state = {
      
    }
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onGlobalHandler(msg, description) {
    this.refs.notification.show(msg);
  }

  handleOk() {
    console.log('ok')
  }

  render() {
    return (
      <div className="wrap">
        <Header />
        <Notification 
          ref="notification"
          footer={[<button value="submit">确定</button>]}
          handleOk={this.handleOk} />
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  state => ({
    // sign: state.config.sign,
  }), { 
  // getDDSign
})(Index)
