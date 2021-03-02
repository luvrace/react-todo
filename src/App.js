import React, { Component } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default class App extends Component {
  id = 0;
  state = {
    todoList : [],
   
  }

  createTodoList = (data) => {
    this.setState({
      todoList : this.state.todoList.concat({
        todo : data,
        id : this.id ++
      }),
    })
  }

  deleteTodoList = (id) => {
    console.log(id);
    this.setState({
      todoList : this.state.todoList.filter( todos => todos.id != id)
    })
  }

  updateTodoList = (data) => {
    console.log(data);
    this.setState({
      todoList : this.state.todoList.map( todos=> {
        if(todos.id == data.id){
          return { todo : data.todo, id:data.id}
        }
      })
    })
  }

  render() {
    return (
      <div>
        <TodoForm onCreate={this.createTodoList}/>
        <TodoList todoList={this.state.todoList} onDelete={this.deleteTodoList} onUpdate={this.updateTodoList}/>
        {JSON.stringify(this.state.todoList)}
      </div>
    )
  }
}
