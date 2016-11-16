import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './style'

class BreadcrumbItem extends React.Component {
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
      children,
      split,
    } = this.props;
    return (
      <span className="breadcrumb-item">
        { children }
        <i>{ split }</i>
      </span>
    )
  }
}

BreadcrumbItem.propTypes = {
  split: PropTypes.string,
}
BreadcrumbItem.defaultProps = {
  split: '/',
}

export default BreadcrumbItem
