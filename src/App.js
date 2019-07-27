import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css'
import Home from './components/Home'
import News from './components/News'

import FormRef from './components/FormRef' //form 表单事件 和ref 05react

import Vmode from './components/Vmode'
import TodoList from './components/TodoList'

import ReactForm from './components/ReactForm'

import Parent from './components/Parent' // 测试父子组件通信

import Lifecycle from './components/Lifecycle' // 测试生命周期


class App extends Component {

  render() {
    return (
      <Router>
        <div >
          <header className="title">

            <Link to="/">动态绑定样式</Link>

            <Link to="/news">引入图片的三种方式</Link>

            <Link to="/FormRef">表单事件&键盘事件</Link>
            <Link to="/Vmode">实现vue-v-modle双向数据绑定</Link>
            <Link to="/ReactForm">react-Form表单</Link>
            <Link to="/TodoList">TodoList组件</Link>
            <Link to="/Parent">React组件通信的几种方式</Link>
            <Link to="/Lifecycle">React组件生命周期</Link>

          </header>

          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/FormRef" component={FormRef} />
          <Route path="/Vmode" component={Vmode} />
          <Route path="/ReactForm" component={ReactForm} />
          <Route path="/TodoList" component={TodoList} />
          <Route path="/Parent" component={Parent} />
          <Route path="/Lifecycle" component={Lifecycle} />
          
       
        </div>
      </Router>
    )
  }
}
export default App;