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

  show() {
    this.setState({
      show: true,
    })
  }

  hide(e) {
    this.setState({
      show: false,
    });
    console.log(e.target.value)
    if (e.target.value === 'submit') this.props.handleOk();
    else if (e.target.value === 'back') this.props.handleCancel();
  }

  render() {
    const {
      title,
      msg,
      footer,
    } = this.props;
    let footerHtml = [];
    if (footer instanceof Array) {
      footer.map((item, key)=>
        footerHtml.push(React.cloneElement(item, Object.assign({}, item.props, {
          onClick: (e) => this.hide(e),
          key: `footer-${key}`,
        })))
      )
    }
    return (
      <div className={this.state.show ? 'notification-wrap show' : 'notification-wrap'}>
        <div className="notification-box">
          <h5>{title}</h5>
          <p>{msg}</p>
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
  msg: '服务器错误',
  footer: [<button value="back">取消</button>,<button value="submit">确定</button>]
}

export default Notification
