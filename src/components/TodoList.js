import React, { Component } from 'react'

export default class TodoList extends Component {
    

    handleDelete = (e) => {
        this.props.onDelete(e.target.id);
    }

    handleUpdate = (e) => {
        
    }

    render() {
        return (
            <div>
                {this.props.todoList.map(
                    todos => {
                        return <div>
                                <b>{todos.todo}</b>
                                <button onClick={this.handleUpdate} id={todos.id}>수정</button>
                                <button onClick={this.handleDelete} id={todos.id}>삭제</button>
                               </div>
                    }
                )}
            </div>
        )
    }
}
