import React, { Component } from 'react'

import Child from './Child'
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      count:100
    }
  }
  run=()=>{
    alert('父组件方法')
  }
  //父组件主动调用子组件的数据和方法
  getChild=()=>{
    console.log(this.refs.child)
  }
  // 子组件传递给父组件数据
  chlidToParent=(value)=>{
    console.log('子组件传来的',value)
  }
  render() {
    return (
    <div>
      <h3>我是父组件</h3>
      <button onClick={this.getChild}>父组件通过ref获取子组件的实例</button>
      <Child ref="child" title={this.state.title} count={this.state.count} run={this.run} Parent={this}/>
      <br />
    </div>
    );
  }
}

export default Parent;