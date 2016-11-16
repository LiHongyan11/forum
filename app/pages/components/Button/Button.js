import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import './style'

class Button extends React.Component {
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
      <a className="button-item">
        { this.props.children }
      </a>
    )
  }
}

export default Button
