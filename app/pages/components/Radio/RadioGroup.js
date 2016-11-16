import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

// import { Icon } from 'antd'
import './style'

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.model,
    }
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onChange(value) {
    this.setState({
      model: value
    })
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    const {
      model,
    } = this.state;
    return (
      <div className="radio-group" ref="RadioGroup">
        {
          React.Children.map(this.props.children, element => {
            return React.cloneElement(element, Object.assign({}, element.props, {
              onChange: this.onChange.bind(this),
              model,
            }))
          })
        }
      </div>
    )
  }
}

RadioGroup.propTypes = {
  onChange: React.PropTypes.func,
}

export default RadioGroup
