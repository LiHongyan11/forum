import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import './style'

class Breadcrumbs extends React.Component {
  render() {
    const {
    } = this.props;
    return (
      <div className="breadcrumbs">
        { this.props.children }
      </div>
    )
  }
}

export default Breadcrumbs
