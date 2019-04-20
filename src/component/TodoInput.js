import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
     
    const {item, handleChange, handleSubmit, editItem} = this.props
    return (


      <div>
        <div className={"form"}>
           <form onSubmit={handleSubmit}>
            <div className={"form-group"}>
              <div className={"icon-div"}> 
                <i>icon</i>
              </div>
              <input value={item} onChange={handleChange} type="text" placeholder="add todo item"/>
            </div>
            <div className={"button-div"}>
              <button 
               style={{backgroundColor: editItem ?  "green" :  "#2f6bee"}
                
              } type="submit" >
              {editItem ? "edit item" : "add item"}
              </button>
            </div>
            
          </form>
        </div>
      </div>
    )
  }
}

  