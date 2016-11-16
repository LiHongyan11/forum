import React, { PropTypes } from 'react'

import './style'

import { Banner } from '../../components'

export default class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }
  handleChange(e) {
    const value = e.target.value.slice(0, this.props.length);
    this.setState({
      value,
    }, () => this.props.handleChange(value))
  }

  render() {
    const {
      value,
    } = this.state;
    const {
      placeholder,
      length,
    } = this.props;
    return (
      <div className="textarea">
        <Banner>我要回答</Banner>
        <textarea placeholder={placeholder} onChange={(e) => this.handleChange(e)} value={value}>
        </textarea>
        <span className={value.length >= length ? 'red-color': ''}>{value.length}/{length}个字</span>
      </div>
    )
  }
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  length: PropTypes.number,
  handleChange: PropTypes.func,
}

Textarea.defaultProps = {
  placeholder: '我来说一下...',
  length: 200,
  handleChange: (val) => {console.log(val)}
}
