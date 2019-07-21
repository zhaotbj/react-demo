import React, { Component } from 'react';
import '../assets/index.css'
import storage from '../module/storage'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[]
     }
  }

  handleKeyUp=(e)=>{
    if(e.keyCode===13) {
      let restList=this.state.list
      restList.push({
        title:this.refs.inputText.value,
        checked:false
      })
      this.setState({
        list:restList
      })
      this.refs.inputText.value=''

      storage.set('todoList',restList)
    }
  }
  handleChange=(index)=>{
    let list=this.state.list
    list[index].checked=!list[index].checked
    this.setState({
      list:list
    })
    storage.set('todoList',list)
  }
  handleDelete=(index)=>{
    let list=this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
    storage.set('todoList',list)
  }
  componentDidMount(){
    let result=storage.get('todoList')
    if(result){
      this.setState({
        list:result
      })
    }
   
    
  }
  render() { 
    return (
      <div>
        <h1>我是TodoList组件</h1>
        <header className="header">todoList：<input ref="inputText" onKeyUp={this.handleKeyUp}/></header>
       正在进行：<ul>
       {
         this.state.list.map((item,index)=>{
           if(!item.checked){
            return <li key={index}><input type="checkbox" checked={item.checked} onChange={this.handleChange.bind(this,index)} />{item.title}---<button onClick={this.handleDelete.bind(this,index)}>删除</button></li>
           }
         })
       }
       </ul>
       <br />
   
      已经完成：<ul>
      {
         this.state.list.map((item,index)=>{
           if(item.checked){
            return <li key={index}><input type="checkbox" checked={item.checked} onChange={this.handleChange.bind(this,index)} />{item.title}---<button onClick={this.handleDelete.bind(this,index)}>删除</button></li>
           }
         })
       }
      </ul>
      
      <br />

      </div>
    );
  }
}
 
export default TodoList;