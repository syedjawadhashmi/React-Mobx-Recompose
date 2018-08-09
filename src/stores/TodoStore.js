import React from 'react';
import { observable, action, computed, autorun } from 'mobx';
import LocalStorage from 'mobx-localstorage';

class TodoStore {

  constructor() {
    autorun(() => {
      if (LocalStorage.getItem('todos'))
        this.todos = LocalStorage.getItem('todos');
    });

  }

  @observable todoInput = React.createRef();
  @observable tagInput = React.createRef();
  @observable filter = 'all';
  @observable beforeEditCache = '';
  @observable idForTodo = 1;
  @observable todos = [];

  @action addTodo = event => {
    const todoInput = this.todoInput.current.value;
    const tagInput = this.tagInput.current.value;

    if (todoInput.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.idForTodo,
      title: todoInput,
      tags: tagInput.split(','),
      completed: false,
      editing: false,
    });

    this.idForTodo++;
    this.todoInput.current.value = '';
    this.tagInput.current.value = '';
    localStorage.setItem('todos', JSON.stringify(this.todos));

  }

  @action deleteTodo = id => {
    const index = this.todos.findIndex(item => item.id === id);
    this.todos.splice(index, 1);
    LocalStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }


  @action editTodo = (todo, event) => {
    todo.editing = true;
    this.beforeEditCache = todo.title;

    const index = this.todos.findIndex(item => item.id === todo.id);

    this.todos.splice(index, 1, todo);
  }

  @action doneEdit = (todo, event, id) => {
    todo.editing = false;

    if (event.target.value.trim().length === 0) {
      todo.title = this.beforeEditCache;
    } else {
      todo.title = event.target.value;
    }

    const index = this.todos.findIndex(item => item.id === todo.id);
    this.todos.splice(index, 1, todo);
    LocalStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  @action cancelEdit = (todo, event) => {
    todo.title = this.beforeEditCache;
    todo.editing = false;

    const index = this.todos.findIndex(item => item.id === todo.id);

    this.todos.splice(index, 1, todo);
  }

  @computed get todosFiltered() {
    if (this.filter === 'all') {
      return this.todos;
    }
    return this.todos;
  }
}

const store = new TodoStore();
export default store;