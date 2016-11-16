import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

// import { Icon } from 'antd'
import './style'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      value,
    })
  }

  render() {
    const {
      placeholder,
      onSearch,
    } = this.props;
    const {
      value,
    } = this.state;
    return (
      <div className="search-box">
        <input placeholder={placeholder} onChange={(e) => this.handleChange(e)} value={value} />
        <span onClick={() => onSearch(value.trim())}></span>
      </div>
    )
  }
}

Search.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
}

Search.defaultProps = {
  placeholder: '请输入搜索内容',
  onSearch: () => {}
}

export default Search
