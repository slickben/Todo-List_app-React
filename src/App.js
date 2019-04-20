import React, { Component } from 'react';
// import logo from './logo.svg';
import TodoList from './component/TodoList'
import TodoInput from './component/TodoInput'
import './App.css';


class App extends Component {
  state ={
    items: [],
    id: 0,
    item: "",
    editItem: false,
    complate: true, 
    taskToShow: "all"
  };

  handleChange = e => {
    e.preventDefault()
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault(); 

    const newItem = {
      id: this.state.id,
      title: this.state.item 
    }

    

    const updatedItem = [...this.state.items, newItem]
    this.setState({
      items: updatedItem,
      item: "",
      id: Math.random().toString(36).substr(1, 9),
      editItem: false
    })
  };

  clearList = () =>{
    this.setState({
      items: []
    })
  }

  clearAllComplate = () =>{
    const complate = this.state.items.filter(item => !item.complate)
    this.setState({
      items: complate
    })
  }

  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id)

    this.setState({
      items: filteredItems,
    });
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    const seletedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredItems,
      item: seletedItem.title,
      editItem: true,
      id: id
    });
};
    handleComplate = id => {
      this.setState({
        items: this.state.items.map(item => {
          if(item.id === id){
            return {
              ...item,
              complate: !item.complate,
              editItem: true,
            };
          }
          else{
            return item;
          }
        })
      });
    }

    updateTaskToShow = task => {
      this.setState({
        taskToShow: task
      })
    }



  


  render() {
    return (
      <>
        <div className="App">
          <div className="row">
            <div className="col">
            <h3>
              todo input
            </h3>
              <TodoInput item= {this.state.item} handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}

              />
              <TodoList 
              taskToShow={this.state.taskToShow}
              updateTaskToShow={this.updateTaskToShow}
              items={this.state.items} 
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleComplate={this.handleComplate}
              clearAllComplate={this.clearAllComplate}
              handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
