import React, { Component } from 'react';

// import Home from './components/Home'
import News from './components/News'

import FormRef from './components/FormRef' //form 表单事件 和ref 05react

import Vmode from './components/Vmode'
import TodoList from './components/TodoList'

import ReactForm from './components/ReactForm'

import Parent from './components/Parent' // 测试父子组件通信
class App extends Component {

  render(){
    return (
      <div >
        <h1>我是根组件</h1>
        <News />
        <hr />
        <FormRef />
        <hr />
        <Vmode />
        <hr />
        <ReactForm />
        <hr />
        <TodoList />
        <hr />
        <h1>测试组件通信</h1>
        <Parent />
      </div>
    )
  }
}

export default App;