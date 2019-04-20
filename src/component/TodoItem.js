import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { complate, title, handleDelete, handleEdit, handleComplate} = this.props
    return (
      <li>
        <div  className={"item"} >
          <input style={{
            outline: "none",
            textTransform: "capitalize",
            borderRadius: "5px",
            border: "none",
            backgroundColor: complate ? 'green' : "#2f6bee",
            color: "white"
          }} onClick={handleComplate} type="submit" value={complate ? "complated" : "complate"}/>
          <h4 style={{
          textDecoration: complate ? "line-through" : ""
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
        </div>
          
      </li>
    )
  }
}
