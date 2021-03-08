import React from "react";
import "./Todo.css";

const ToDo = (props) => {
    const { todo }=props;

    return (
        <div className="individualItem">
            <p>{todo.task}</p>
        </div>
    )
}

export default ToDo;