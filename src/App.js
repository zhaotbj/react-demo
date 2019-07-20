import React, { Component } from 'react';

// import Home from './components/Home'
// import News from './components/News'

import FormRef from './components/FormRef' //form 表单事件 和ref 05react

import TodoList from './components/TodoList'

import ReactForm from './components/ReactForm'
class App extends Component {

  render(){
    return (
      <div >
        我是跟组件
        {/* <News /> */}

        <FormRef />
        <hr></hr>
        {/* <TodoList /> */}

        <ReactForm />
      </div>
    )
  }
}

export default App;