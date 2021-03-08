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

  //HELPER FUNCTION FOR ADDING NEW ITEM TO LIST, GETS PASSED VIA PROPS
handleAddItem = (newItem)=>{
  this.setState({
    todos: [...this.state.todos, newItem]
  })
}

//HELPER FUNCTION FOR PUTTING LINE THROUGH ITEM THAT"S COMPLETED
handleCompletedItem = (clickedOnId) => {
  this.setState({
    ...this.state, todos: this.state.todos.map((item)=>{
      if (item.id===clickedOnId){
        return {
          ...item, completed: !item.completed
        }
      } else {
        return item;
      }
    })
  })
}

  render() {
    return (
      <div className="catchAll">
        <h2>To Do List</h2>
        <ToDoList todos={this.state.todos} handleCompletedItem={this.handleCompletedItem} />
        <ToDoForm todos={this.state.todos} handleAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;
