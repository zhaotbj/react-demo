import { takeEvery ,put} from 'redux-saga/effects'
import {GET_MY_LIST} from './actionType'

import {getListAction} from './actionCreators'
import axios from 'axios'
function* mySaga() {
  //等待捕获action
  yield takeEvery(GET_MY_LIST, getList)
} 


function* getList(){
  //这段代码我就不删除了。
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
    //     const data = res.data
    //     const action = getListAction(data)
    //     put(action)
        
    // })
    const res = yield axios.get('https://www.easy-mock.com/mock/5d4a953c382a052ea435900a/example/query')
   
    const action = getListAction(res.data.data.list)
    yield put(action)

}

export default mySaga;