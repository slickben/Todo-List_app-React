import React, { Component } from 'react';
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
  render() {
     const {taskToShow, clearList, handleDelete, handleEdit, handleComplate, updateTaskToShow, clearAllComplate } = this.props
     let arrItems = [];
     if(taskToShow === "all"){
      arrItems = this.props.items
     }
     else if(taskToShow === "active"){
      arrItems = this.props.items.filter(item => !item.complate);

     }else if(taskToShow === "complate"){
      arrItems = this.props.items.filter(item => item.complate);
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
              }} onClick={() => updateTaskToShow("complate")}>complate </button>
            </div>
            <h3>todo list</h3>
            <div>task left {arrItems.filter(item => !item.complate).length}</div>
            {arrItems.map(item => {
              return(
                <TodoItem 
                complate={item.complate}
                key={item.id} 
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                handleComplate={() => handleComplate(item.id)}


                />
              )
            })}
            {arrItems.some(item => item.complate) ? <button className={"clear-all-btn"} type="submit" onClick={clearAllComplate} >clear All conplate</button> : null}
            
            <button className={"clear-all-btn"} type="submit" onClick={clearList}>clear list</button>
          </ul>

        
      </div>
    )
  }
}


  