import React from 'react'

const arr = [
  [{
    id: 0,
    text: 'a',
  }, {
    id: 1,
    text: 'b',
  }],
  [{
    id: 0,
    text: 'c',
  }, {
    id: 1,
    text: 'd',
  }]
]

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <li>{'props.data.text'}</li>
    )
  }
}

// function List(props) {
//   return <li>{props.data.text}</li>
// }

function TestCom(props) {
  return <div>{'ff'}</div>
}

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: parseInt(e.target.value),
    })
  }

  buildList(arr) {
    return arr.map((item, key) => <List key={key} data-key={key} data={1} onCopy={(val) => console.log(val)} />)
  }

  render() {
    const {
      value,
    } = this.state;
    const list = value === 0 ?
          arr.map(item => this.buildList(item)) :
          <List data={1} onCopy={(val) => console.log(val)} />
    return (
      <div className="test" style={{marginTop: '65px', marginLeft: '100px'}}>
        <select onChange={this.onChange}>
          <option value={0}>全部</option>
          <option value={1}>a</option>
          <option value={2}>b</option>
        </select>

        <ul>
        {
          list
        }
        </ul>
        <TestCom />
      </div>
    )
  }
}

// function Test() {
//   return <div style={{marginTop: '65px', marginLeft: '100px'}} onClick={(e) => console.log(e)}>onclick</div>
// }

export default Test
