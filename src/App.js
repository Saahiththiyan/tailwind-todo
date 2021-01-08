import {React, Component} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import TodoItem from './TodoItem/TodoItem'

class App extends Component {
  state = {
    todos: [
      {
        id: 0,
        text: "Hello World",
        completed: true
      },
      {
        id: 1,
        text: "My Name",
        completed: false
      },
    ],
    text: ""
  };

  textChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  addTodoHandler = () => {
    const todos = this.state.todos
    todos.push({
      id: 2,
      text: this.state.text,
      completed: false
    })
    this.setState({
      todos: [...todos],
      text: ""
    })
  }

  deleteTodoHandler = (index) => {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
      todos: todos
    })
  }

  markTodoComplete = (index) => {
    const todos = this.state.todos;
    todos[index].completed = true;
    this.setState({
      todos: todos
    }) 

  }
  
  render () {
    var todos = this.state.todos;
    var todoList = (
      todos.map((todo, index) => {
        return <TodoItem todo={todo} deleteTodo={() => this.deleteTodoHandler(index)} markComplete={() => this.markTodoComplete(index)} key={index}></TodoItem>
      })
    )
    return <div className="App">
        <div className="flex flex-col items-center min-h-screen bg-gray-200 justify-center py-10">
          <div className="bg-white rounded-xl p-4 w-80 shadow">
            <div className="flex">
              <input className="flex-initial bg-gray-100 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full mr-2 pl-4" onChange={(event) => this.textChangeHandler(event)} value={this.state.text} placeholder="New Todo" type="text" name="last_name" id="last_name"></input>
              <button className="flex-initial bg-blue-100 hover:bg-blue-200 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-20" onClick={this.addTodoHandler}><FontAwesomeIcon className="text-blue-500" icon={faPlus} /></button>
            </div>
            {todoList} 
  
          </div>
        </div>
      </div>
  }
}

export default App;
