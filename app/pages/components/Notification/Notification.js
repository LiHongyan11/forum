import React, { PropTypes } from 'react'
import './style'

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  show(msg) {
    this.setState({
      show: true,
      msg,
    })
  }

  hide(e) {
    this.setState({
      show: false,
    });
    if (e.target.value === 'submit') this.props.handleOk();
    else if (e.target.value === 'back') this.props.handleCancel();
  }

  render() {
    const {
      title,
      footer,
    } = this.props;
    let footerHtml = [];
    if (footer instanceof Array) {
      footer.map((item, key)=>
        footerHtml.push(React.cloneElement(item, Object.assign({}, item.props, {
          onClick: (e) => this.hide(e),
          key: `footer-${key}`,
          className: item.value !== 'submit' ? 'gray' : ''
        })))
      )
    }
    return (
      <div className={this.state.show ? 'notification-wrap show' : 'notification-wrap'}>
        <div className="notification-box">
          <h5>{title}</h5>
          <p>{this.state.msg}</p>
          <div className="btns">
            { 
              footerHtml
            }
          </div>
        </div>
      </div>
    )
  }
}

Notification.propTypes = {
  title: PropTypes.string,
  msg: PropTypes.string,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  handleCancel: PropTypes.func,
  handleOk: PropTypes.func,
}

Notification.defaultProps = {
  title: '提示',
  footer: [<button value="back">取消</button>,<button value="submit">确定</button>]
}

export default Notification
