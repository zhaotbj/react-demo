import React, { Component } from 'react';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username:'张三'
     }
  }

  changeValue=(e)=>{
    this.setState({
      username:e.target.value
    })
  }
  handleClick=(e)=>{
    this.setState({
      username:'王五'
    })
  }
  render() { 
    return (
      <div>
        我是TodoList组件
      <p>双向数据绑定</p>

      <input value={this.state.username} onChange={this.changeValue}/>
      <button onClick={this.handleClick}>改变值</button>
      <br></br>
      {this.state.username}

      <br/>
      <input defaultValue={this.state.username}/>
      </div>
    );
  }
}
 
export default TodoList;