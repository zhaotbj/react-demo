import React, { Component } from 'react';
class Vmode extends Component {
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
        <h1>我是Vmode组件---双向数据绑定</h1>
        
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
 
export default Vmode;