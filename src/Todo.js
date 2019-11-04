import React ,{Component}from 'react';
import './App.css';

let getId =" ";
class Todo extends Component{
constructor(props){
  super(props)
    this.state={
      item     : "",
      todoItem : []
    }
  }
  onChangeHandler=(event)=>{
    var inputVal = event.target.value;
      this.setState({
      item:inputVal
    })
  }
  addData=()=>{
    var inputVal     = this.state.item;
    var itemInstance = this.state.todoItem;
    itemInstance.push(inputVal);
    this.setState({
      todoItem : itemInstance,
      item : " "
    })
  }
  delete=(event)=>{
  var id = event.target.index;
  var itemInstance = this.state.todoItem;
    itemInstance.splice(id,1);
    this.setState({
      todoItem : itemInstance
    })
  }
  edit=(event)=>{
    getId = event.target.id;
    this.setState({
      item : this.state.todoItem[event.target.id]
    })
    document.getElementById("addItem").style.display="none";
    document.getElementById("update").style.display="block";

    }
    update=()=>{
      var itemInstance = this.state.todoItem;
      itemInstance[getId] = this.state.item;
      this.setState({
      todoItem : itemInstance,
      item : ""
      })
      document.getElementById("addItem").style.display="block";
      document.getElementById("update").style.display="none";
    }
  
  render() {
    var itemList = this.state.todoItem.map((item,index)=>
    <li key={index}>{item}
        <span onClick={this.delete} id={index} className="btn btn-danger">X</span>
        <span onClick={this.edit} id={index} className="edit btn btn-success">edit</span>

    </li>
    )
    return (
      <div className="todoListMain">
        <div className="header">Todo App Tutorial</div>
        <div className="footer">
            <input type="text" value={this.state.item} onChange={this.onChangeHandler}/>
            <button id ="addItem" onClick={this.addData}>+</button>
            <button id = "update" onClick={this.update} className=" btn btn-warning">Update</button>

            {/* <p>{this.state.item}</p> */}
            </div>
            <div className="body">
              <ul>
              {itemList}
              </ul>
            </div>
        </div>                 
    )
  }
}
export default Todo;
