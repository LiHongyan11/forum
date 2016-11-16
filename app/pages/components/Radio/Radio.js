import React from 'react'
import { connect } from 'react-redux'

// import { Icon } from 'antd'
import './style'

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.getChecked(props),
    }
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    const active = this.getChecked(nextProps);
    if(active !== this.state.active) this.setState({ active });
  }

  handleClick() {
    this.props.onChange && this.props.onChange(this.props.value);
    this.setState({
      active: true,
    })
  }
  getChecked(props) {
    return props.model === props.value;
  }

  render() {
    const {
      active,
    } = this.state;
    return (
      <a href="javascript:;" className={active ? 'radio-item active' : 'radio-item'} onClick={() => this.handleClick()}>
        { this.props.children }
      </a>
    )
  }
}

export default Radio
