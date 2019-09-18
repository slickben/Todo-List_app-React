import React, { Component } from 'react';
// import logo from './logo.svg';
import TodoList from './component/TodoList'
import TodoInput from './component/TodoInput'
import './App.css';


class App extends Component {
  state ={
    id: 0,
    items: [],
    item: "",
    editing: "",
    // isEditing: true,
    complete: true, 
    taskToShow: "all",

  };




  handleChange = e => {
    e.preventDefault()
    this.setState({
      item: e.target.value
    });
  };

  handleEdithing = e => {
    e.preventDefault()
    this.setState({
      editing: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault(); 

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    }



    

    const updatedItem = [...this.state.items, newItem]
    this.setState( state =>({
      items: updatedItem,
      item:'',
      id: state.id+1
    }))
  };

  clearList = () =>{
    this.setState({
      items: []
    })
  }

  clearAllComplete = () =>{
    const complete = this.state.items.filter(item => !item.complete)
    this.setState({
      items: complete
    })
  }

  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id)

    this.setState({
      items: filteredItems,
    });
  }

  handleEdit = id => {
    // this.props.handleSubmit = false
    
    const seletedItem = this.state.items.find(item => item.id === id)
    this.setState({
      editing: seletedItem.title,
      items: this.state.items.map(item => {
        if(item.id === id){
          return {
            ...item,
            isEditing: !item.isEditing,
          };
        }
        else{
          return item;
        }
      }),
      editItemId: seletedItem.id,
      editItem: true,
    });
};

  handleUpdatedItem = () => {

    const seletedItemIndex = this.state.items.findIndex(item => item.id === this.state.editItemId)

   let itemToUpdate = {
      id: this.state.editItemId,
      title: this.state.editing ,
    }

     this.setState(state => {
          state.editItem = false;
          state.isEditing = false;
          state.editing = '';
          return state.items.splice(seletedItemIndex, 1, itemToUpdate)
          
       })
     }


    // let itemToUpdate = {
    //   id: this.state.id,
    //   title: this.state.item 
    // }
    // function findTheEditedTask (task) {
    //   return task === itemToUpdate.id
    // }

    // let EditedTaskIndex = this.state.items.findIndex(findTheEditedTask)
    // this.setState({
    //   items: this.state.items[EditedTaskIndex] = itemToUpdate,

    // })
 // }
    handleComplete = id => { 
      this.setState({            
        items: this.state.items.map(item => {
          if(item.id === id){
            return {
              ...item,
              complete: !item.complete,
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
              handleUpdatedItem={this.handleUpdatedItem}
              handleEdithing={this.handleEdithing}
              editing=  {this.state.editing}
              editItem={this.state.editItem}
              taskToShow={this.state.taskToShow}
              updateTaskToShow={this.updateTaskToShow}
              items={this.state.items} 
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleComplete={this.handleComplete}
              clearAllComplete={this.clearAllComplete}
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
