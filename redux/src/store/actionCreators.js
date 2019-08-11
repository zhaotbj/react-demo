import {GET_MY_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionType'

import axios from 'axios'

export const changeInputAction = (value) => (
  {
    type: CHANGE_INPUT,
    value
  }
)

export const addItemAction = () => (
  {
    type: ADD_ITEM
  }
)

export const deleteItemAction = (index) => (
  {
    type: DELETE_ITEM,
    index
  }
)

export const getListAction=(data)=>(
  {
    type:GET_LIST,
    data
  }
)

export const getTodoList=()=>{
  return (dispatch)=>{
    axios.get('https://www.easy-mock.com/mock/5d4a953c382a052ea435900a/example/query').then(res=>{
    
      if(res.data.success){
        
        const action=getListAction(res.data.data.list)
        dispatch(action)
      }
    })
  }
}


export const getMyListAction=()=>({
  type:GET_MY_LIST
})