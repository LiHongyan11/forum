import React, { PropTypes } from 'react'

import './style'

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagers: props.total / props.pageSize,
      activePage: 1,
      showPrevMore: false,
      showNextMore: false,
    }
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  handleChangePage(page) {
    const { activePage } = this.state;
    if (activePage === page) return false;
    this.setState({
      activePage: page,
    }, () => this.props.handlePage(page))
  }

  handlePagers() {
    const pageCount = 7;
    const { activePage, pagers } = this.state;

    let showPrevMore = false;
    let showNextMore = false;

    if (pagers > pageCount) {
      if (activePage > pageCount - 2) {
        showPrevMore = true;
      }

      if (activePage < pageCount - 2) {
        showNextMore = true;
      }
    }

    const array = [];

    if (showPrevMore && !showNextMore) {
      const startPage = pagers - (pagers - 2);
      for (let i = startPage; i < pagers; i++) {
        array.push(i);
      }
    } else if (!showPrevMore && showNextMore) {
      for (let i = 2; i < pageCount; i++) {
        array.push(i);
      }
    } else if (showPrevMore && showNextMore) {
      const offset = Math.floor(pageCount / 2) - 1;
      for (let i = activePage - offset ; i <= activePage + offset; i++) {
        array.push(i);
      }
    } else {
      for (let i = 2; i < pagers; i++) {
        array.push(i);
      }
    }
    this.setState({
      showPrevMore,
      showNextMore,
    });
    return array;
  }

  render() {
    const {
      pagers,
      activePage,
    } = this.state;

    if (pagers <= 1) return <div></div>

    return (
      <div className="pagination-box">
        {
          activePage != 1 ? <a href="javascript:;" onClick={() => this.handleChangePage(activePage-1)}>上一页</a> : null
        }
        {
          [...Array(pagers)].map((item, key) => 
            <a 
              href="javascript:;" 
              key={`page-${key}`} 
              onClick={() => this.handleChangePage(key+1)}
              className={activePage === key + 1 ? 'active' : ''}>{key + 1}</a>
          )
        }
        {
          activePage != pagers ? <a href="javascript:;" onClick={() => this.handleChangePage(activePage+1)}>下一页</a> : null
        }
        
      </div>
    )
  }
}

Pagination.propTypes = {
  total: PropTypes.number,
  pageSize: PropTypes.number,
  handlePage: PropTypes.func,
}

Pagination.defaultProps = {
  total: 50,
  pageSize: 10,
  handlePage: () => {}
}

export default Pagination
