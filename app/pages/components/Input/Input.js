import React, { PropTypes } from 'react'

import './style'

class Input extends React.Component {
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
      label,
      placeholder,
      type,
    } = this.props;
    return (
      <div className="input-item">
        <label>{label}</label>
        <div className="input-box">
          <input type={type} placeholder={placeholder} onChange={(e) => this.props.onChange(e.target.value)} />
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type:  PropTypes.string,
}

Input.defaultProps = {
  label: '账号',
  placeholder: '请输入账号',
  type: 'text',
}

export default Input
