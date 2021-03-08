import React from "react";
import "./Todo.css";

const ToDo = (props) => {
    const { todo, handleCompletedItem }=props;

    return (
        <div onClick={()=>handleCompletedItem(todo.id)} className={`individualItem${todo.completed ? 'completed' : ''}`} >
            <p>{todo.task}</p>
        </div>
    )
}

export default ToDo;