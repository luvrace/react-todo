import React, { Component } from 'react'

class TodoForm extends Component {

    state = {
        todo : '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state.todo);
        this.setState({
            todo : ''
        })
    }
    handleChange = (e) =>{
        this.setState({
            todo : e.target.value
        })
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <input type="text" name="todo" onChange={this.handleChange} value={this.state.todo}/>
                    <button type="submit">등록</button>
                </form>

                {this.state.todo}
            </div>
        )
    }
}
export default TodoForm