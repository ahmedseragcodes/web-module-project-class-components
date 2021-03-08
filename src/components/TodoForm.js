import React from "react";


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
                    <label htmlFor="task">Enter A New Item:
                        <input name="task" id="task" value={this.state.newItem.task} onChange={this.handleNewItemChange} />
                        <button>Add Item</button>
                    </label>
                    </form>
                </div>
            )
        }
}

export default ToDoForm;