import React from 'react'
import { connect } from 'react-redux'

// import { Icon } from 'antd'
import './style'

class ButtonGroup extends React.Component {
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
      <div className="button-group">
        { this.props.children }
      </div>
    )
  }
}

export default ButtonGroup
