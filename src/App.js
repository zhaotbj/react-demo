import React, { Component } from 'react';

// import Home from './components/Home'
import News from './components/News'

import FormRef from './components/FormRef' //form 表单事件 和ref 05react

import Vmode from './components/Vmode'
import TodoList from './components/TodoList'

import ReactForm from './components/ReactForm'
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
      </div>
    )
  }
}

export default App;