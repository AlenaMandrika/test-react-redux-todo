import React, { Component } from 'react'
import './TodoList.css'

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: this.props.inputText || '',
    }

    this.changeInput = this.changeInput.bind(this)
    this.onEnterAddItem = this.onEnterAddItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  changeInput(e){
    this.setState({
      inputText: e.target.value
    });
  }

  addItem(){
    if(this.state.inputText){
      this.props.addTodo(this.state.inputText);
      this.setState({
        inputText: ''
      })
    }
  }

  onEnterAddItem(e){
    if(e.which === 13 || e.keyCode === 13 || e.key === 'Enter'){
      this.addItem();
    }
  }

  render() {
    const { items, filter, showAll, showActive, showCompleted } = this.props;
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.changeInput}
            onKeyPress={this.onEnterAddItem}
            placeholder="Add todo..."
          />
          <button onClick={this.addItem}>Add</button>
        </div>
        <div>
          {items.map((item, key) => {
            if(filter === 'ALL'){
              return(
                <div key={key}>
                    <span className={item.completed ? "itemText line" : "itemText"}
                          onClick={this.props.toggleTodo.bind(this, key)}
                    >{item.text}</span>
                  <button onClick={this.props.removeTodo.bind(this, key)}>Remove</button>
                </div>
              )
            } else if (filter === 'ACTIVE' && item.completed === false){
              return(
                <div key={key}>
                  <span
                    className={item.completed ? "itemText line" : "itemText"}
                    onClick={this.props.toggleTodo.bind(this, key)}
                  >{item.text}</span>
                  <button onClick={this.props.removeTodo.bind(this, key)}>Remove</button>
                </div>
              )
            } else if (filter === 'COMPLETED' && item.completed === true){
              return(
                <div key={key}>
                  <span
                    className={item.completed ? "itemText line" : "itemText"}
                    onClick={this.props.toggleTodo.bind(this, key)}
                  >{item.text}</span>
                  <button onClick={this.props.removeTodo.bind(this, key)}>Remove</button>
                </div>
              )
            }
          })}
        </div>
        <div>
          <a onClick={showAll.bind(this)} className={filter === 'ALL' ? "filter" : ""}>All</a>
          <a onClick={showActive.bind(this)} className={filter === 'ACTIVE' ? "filter" : ""}>Active</a>
          <a onClick={showCompleted.bind(this)} className={filter === 'COMPLETED' ? "filter" : ""}>Completed</a>
        </div>
      </div>
    );
  }
}

