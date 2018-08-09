import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { inject, observer } from 'mobx-react';

@inject('TodoStore')
@observer
class App extends Component {

  render() {
    const TodoStore = this.props.TodoStore;

    return (
      <div className="App">
        <div id="myDIV" className="header">
          <h2>My To Do List</h2>
          <div className='inputs'>
            <input type="text" id="myInput" placeholder="Add Todo ..." ref={TodoStore.todoInput} />
            <input type="text" id="myInput1" placeholder="Add comma separated tags ..." ref={TodoStore.tagInput} />
          </div>
          <button className="addBtn" onClick={(event) => TodoStore.addTodo(event)}>Create Todo</button>
        </div>
        <div className="bodydiv">
          <br />
          {TodoStore.todosFiltered.map(todo =>
            <TodoItem key={todo.id} todo={todo} deleteTodo={this.deleteTodo} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
