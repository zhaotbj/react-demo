import React, { Component } from 'react'
import '../assets/index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '我是一个HOME组件',
      title:"我是title",
      color:'red',
      style:{
        color:'red',
        fontSize:'24px'
      }
    }
  }


  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <div title={this.state.title}>我是div</div>
        <br/>
        <div className="red">绑定样式</div>
        <br />
        <div className={this.state.color}>绑定样式1</div>
        <br/>
        <div style={{'color':'red'}}>绑定行内样式</div>
        <br/>
        <div style={this.state.style}>绑定行内样式</div>
        <br/>

        
        <label htmlFor="name">姓名</label>
        <input id="name" />
        <br />
      </div>
    )
  }
}

export default Home