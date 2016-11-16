import React, { PropTypes } from 'react'

import './style'

class Banner extends React.Component {
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
      <h3 className="banner-item" {...this.props}>
        { this.props.children }
      </h3>
    )
  }
}

export default Banner
