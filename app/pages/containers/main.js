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
    this.refs.notification.show();
  }

  handleOk() {
    console.log('ok')
  }

  handleCancel() {
    console.log('cancel')
  }

  render() {
    return (
      <div className="wrap">
        <Header />
        <Notification 
          ref="notification" 
          handleCancel={this.handleCancel}
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
