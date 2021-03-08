//TECH IMPORTS 
import React from 'react';
//STYLING IMPORTS
import "./components/Todo.css";
//COMPONENT IMPORTS 
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

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

handleAddItem = (newItem)=>{
  this.setState({
    todos: [...this.state.todos, newItem]
  })
}

  render() {
    return (
      <div className="catchAll">
        <h2>To Do List</h2>
        <ToDoList todos={this.state.todos} />
        <ToDoForm todos={this.state.todos} handleAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;
