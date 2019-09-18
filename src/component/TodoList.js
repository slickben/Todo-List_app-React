import React, { Component } from 'react';
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
  render() {
     const {taskToShow, clearList, handleDelete, handleEdit, handleComplete, updateTaskToShow, clearAllComplete, editing, handleEdithing, handleUpdatedItem} = this.props
     let arrItems = [];
     if(taskToShow === "all"){
      arrItems = this.props.items
     }
     else if(taskToShow === "active"){
      arrItems = this.props.items.filter(item => !item.complete);

     }else if(taskToShow === "complete"){
      arrItems = this.props.items.filter(item => item.complete);
     }
    return (
      <div className={"App"}>
          <ul>
            <div className={"action-btn"}>

              <button onClick={ ( ) => updateTaskToShow("all")}>all</button>
              <button style={{
                backgroundColor: "green"
              }} onClick={() => updateTaskToShow("active")}>active</button>
              <button style={{
                backgroundColor: "red"
              }} onClick={() => updateTaskToShow("complete")}>complete </button>
            </div>
            <h3>todo list</h3>
            <div>task left {arrItems.filter(item => !item.complete).length}</div>
            {arrItems.map(item => {
              return(
                <TodoItem 
                handleUpdatedItem={handleUpdatedItem}
                handleEdithing={handleEdithing}
                editing={editing}
                isEditing={item.isEditing}
                complete={item.complete}
                key={item.id} 
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                handleComplete={() => handleComplete(item.id)}


                />
              )
            })}
            {arrItems.some(item => item.complete) ? <button className={"clear-all-btn"} type="submit" onClick={clearAllComplete} >clear All conplete</button> : null}
            
            <button className={"clear-all-btn"} type="submit" onClick={clearList}>clear list</button>
          </ul>

        
      </div>
    )
  }
}


  