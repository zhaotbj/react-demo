import React, { Component } from 'react'
// import axios from 'axios'
import TodoListUI from './TodoListUI'
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/actionType'

import { getMyListAction , changeInputAction, addItemAction, deleteItemAction, getListAction} from './store/actionCreators'
import store from './store'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.storeChange) //订阅Redux的状态
    this.deleteItem = this.deleteItem.bind(this)
  }
  componentDidMount(){

    const action = getMyListAction()
    store.dispatch(action)
    // 将异步接口统一放在中间件中处理
  }
  storeChange=()=>{
    this.setState(store.getState())
  }
  changeInputValue=(e)=>{
    const action= changeInputAction(e.target.value)
    store.dispatch(action)
  }
  handleBtn=()=>{
    const action=addItemAction()
    store.dispatch(action)
  }
  deleteItem(index){
    console.log(index, 'index')
    const action=deleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return (
      <div>
        <TodoListUI 
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        handleBtn={this.handleBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
         />
        

      </div>
    );
  }
}

export default TodoList;