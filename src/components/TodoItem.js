import React, { Component } from 'react'

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '1px',
      borderBottom: '1px #ccc dotted',
      width: '600px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} />
          {' '}
          { title }
          <button style={btnStyle} onClick={this.props.delItem.bind(this, id)} >x</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  backgroundColor: 'red',
  color: 'white',
  borderRadius: '5px',
  float: 'right',
  cursor: 'pointer'
}

export default TodoItem
