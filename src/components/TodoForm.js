import React from "react";
import "./Todo.css";

class ToDoForm extends React.Component{
    constructor(){
        super();
        this.state={
            newItem: {
                task: "",
                id: new Date(),
                completed: false,
            }
        }
        }

        //handles form changes when adding new todo item
        handleNewItemChange=(event)=>{
            const {name, value}=event.target;

            this.setState({
                newItem: {
                    ...this.state.newItem, [name]: value
                }
            })
        }

        //handles submission of new item by utilizing function imported via props from app
        handleNewItemSubmit =(event)=>{
            event.preventDefault();
            this.props.handleAddItem(this.state.newItem)
        }

        render(){
            return (
                <div className="ToDoForm">
                    <form onSubmit={this.handleNewItemSubmit} >
                    <label htmlFor="task">
                        <input name="task" id="task" placeholder="Enter New Item" value={this.state.newItem.task} onChange={this.handleNewItemChange} />
                        <button>Add Item</button>
                    </label>
                    </form>
                    <p className="howToKey">*Click Each Task When Done To Cross It Out</p>
                </div>
            )
        }
}

export default ToDoForm;