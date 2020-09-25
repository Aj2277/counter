import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});
  }

  render() {    
    return (
      <form onSubmit={this.onSubmit} >
        <input
          style={addStyle}
          type='text'
          name='title'
          placeholder='Add new Todo'
          value={this.state.title}
          onChange={this.onChange} />

        <input
          style={addBtnStyle}
          type='submit'
          value='Submit' />
      </form>
    )
  }
}

const addStyle = {
  width: '500px',
  height: '35px',
  fontSize: '16px'
}
const addBtnStyle = {
  width: '94px',
  height: '40px',
  border: 'none',
  fontSize: '16px',
  background: '#128842',
  color: '#fff'
}

export default AddTodo
