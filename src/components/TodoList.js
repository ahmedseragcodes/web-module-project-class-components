import React from "react";

import ToDo from "./Todo";

class ToDoList extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                {this.props.todos.map((todo)=>{
                    return <ToDo todo={todo} />
                })}
            </div>
        )
    }
}

export default ToDoList;