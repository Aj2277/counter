import React, { Component } from 'react';
import TodoItem from './TodoItem';

export class Todos extends Component {
  render() {    
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delItem={this.props.delItem} />
    ));
  }
}

export default Todos
