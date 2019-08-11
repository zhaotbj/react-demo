import { GET_MY_LIST,CHANGE_INPUT, ADD_ITEM, DELETE_ITEM ,GET_LIST} from './actionType'
const defaultStore = {
  inputValue: "Write Something",
  list: []
}
export default (state = defaultStore, action) => {
  console.log(state, action)

  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }


  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list=action.data
    return newState
  }
  if(action.type===GET_MY_LIST) {
      let newState = JSON.parse(JSON.stringify(state))
      newState.list=action.data
      return newState
  }
  
  return state
}