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
    this.editItem = this.editItem.bind(this)
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

  editItem (e) {
    let text = this.testInput.value
    console.log(text)
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
        <div className='input-text'>
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
                <div className='list' key={key}>
                  <input
                    type="text"
                    className={item.completed ? "itemText line" : "itemText"}
                    onChange={this.props.editTodo.bind(this, item.text)}
                    defaultValue={item.text}
                    ref={(input) => this.testInput = input}
                  />
                  <div>
                    <button onClick={this.props.removeTodo.bind(this, key)}>Remove</button>
                    <button onClick={this.editItem}>Save</button>
                    <button onClick={this.props.toggleTodo.bind(this, key)}>Complete</button>
                  </div>
                </div>
              )
            } else if (filter === 'ACTIVE' && item.completed === false){
              return(
                <div className='list' key={key}>
                  <input
                    type="text"
                    className={item.completed ? "itemText line" : "itemText"}
                    onChange={this.props.editTodo.bind(this, item.text)}
                    defaultValue={item.text}
                    ref={(input) => this.testInput = input}
                  />
                  <div>
                    <button onClick={this.props.removeTodo.bind(this, key)}>Remove</button>
                    <button>Save</button>
                    <button onClick={this.props.toggleTodo.bind(this, key)}>Complete</button>
                  </div>
                </div>
              )
            } else if (filter === 'COMPLETED' && item.completed === true){
              return(
                <div className='list' key={key}>
                  <input
                    type="text"
                    className={item.completed ? "itemText line" : "itemText"}
                    onChange={this.props.editTodo.bind(this, item.text)}
                    defaultValue={item.text}
                    ref={(input) => this.testInput = input}
                  />
                  <div>
                    <button onClick={this.props.removeTodo.bind(this, key)}>Remove</button>
                    <button>Save</button>
                    <button onClick={this.props.toggleTodo.bind(this, key)}>Complete</button>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div>
          <button onClick={showAll.bind(this)} className={filter === 'ALL' ? "filter all" : ""}>All</button>
          <button onClick={showActive.bind(this)} className={filter === 'ACTIVE' ? "filter active" : ""}>Active</button>
          <button onClick={showCompleted.bind(this)} className={filter === 'COMPLETED' ? "filter completed" : ""}>Completed</button>
        </div>
      </div>
    );
  }
}

