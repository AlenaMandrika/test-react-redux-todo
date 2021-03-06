import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';

import TodoList from './components/TodoList/TodoListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Todo List</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
