import React, { Component } from 'react';

import './App.css';

import Counter from './components/count/Counter';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Call Lawyer',
        completed: false 
      },
      {
        id: 2,
        title: 'Find an Apartment',
        completed: false 
      },
      {
        id: 3,
        title: 'Call AmEx',
        completed: false 
      }
    ]
  }


  randomNum = () => {
    let rand = '';

    for (let num = 0; num < 10; num++) {
      let num = Math.floor(Math.random() * 10);
        rand += num
        console.log(this.rand);
        
    }
    return parseInt(rand)
    
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
    
  }

  delItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo =>
      todo.id !== id) ] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: this.randomNum(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
    console.log(this.state.todos);
    
  }

  render() {  
    
    return (    
        <div className="App">
          
          <Counter />
            <p className="line"></p>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delItem={this.delItem} />

        </div>
      );
    }
}
export default App;
