import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    // function change(){
    //   console.log("is working")
    // }
    const {isEditing, complete, title, handleDelete, handleEdit, handleComplete, editing, handleEdithing, handleUpdatedItem} = this.props
    return (
      <li>
      { isEditing ? <>
      <form onSubmit={handleUpdatedItem}>
        <input type="test" onBlur={handleUpdatedItem}  value={editing} onChange={handleEdithing}/> 
      </form>
      </>
       : <div  className={"item"} >
          <input style={{
            outline: "none",
            textTransform: "capitalize",
            borderRadius: "5px",
            border: "none",
            backgroundColor: complete ? 'green' : "#2f6bee",
            color: "white"
          }} onClick={handleComplete} type="submit" value={complete ? "completed" : "complete"}/>
          <h4 style={{
          textDecoration: complete ? "line-through" : ""
        }} >{title}</h4>
          <div className="todo-icon">
          <span style={{
            fontWeight: "700",
            color: "green"
          }} onClick={handleEdit}>Edit
              <i></i>
            </span>

            <span style={{
            fontWeight: "700",
            color: "red"
          }} onClick={handleDelete}> delete
              <i></i>
            </span>
        </div>
        </div>}
          
      </li>
    )
  }
}
