import React from 'react';
import "./components/Todo.css";
import ToDoList from "./components/TodoList";

const data=[
  {
    task: "Workout",
    id: new Date(),
    completed: false,
  },
  {
    task: "Study",
    id: new Date(),
    completed: false,
  },
  {
    task: "Cleaning",
    id: new Date(),
    completed: false,
  },
  {
    task: "Laundry",
    id: new Date(),
    completed: false,
  },
]


class App extends React.Component {
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todos: data
    }
  }
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <ToDoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
