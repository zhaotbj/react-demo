import React, { Component } from 'react'
import '../assets/index.css'
/* 
React生命周期函数：

    组件加载之前，组件加载完成，以及组件更新数据，组件销毁。

    触发的一系列的方法 ，这就是组件的生命周期函数


组件加载的时候触发的函数： 

    constructor 、componentWillMount、 render 、componentDidMount

组件数据更新的时候触发的生命周期函数：

    shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate


你在父组件里面改变props传值的时候触发的：

    componentWillReceiveProps


组件销毁的时候触发的：

    componentWillUnmount


必须记住的生命周期函数：

    *加载的时候：componentWillMount、 render 、componentDidMount（dom操作）

    更新的时候：componentWillUpdate、render、componentDidUpdate

    *销毁的时候： componentWillUnmount    */
class Lifecycle extends Component {
  constructor(props) {
    console.log('01构造函数');
    super(props)
    this.state = {
      msg: '我是一个Lifecycle组件'
    }
  }
 //组件将要挂载的时候触发的生命周期函数
 componentWillMount(){
  console.log('02组件将要挂载');
}
 //组件挂载完成的时候触发的生命周期函数
 componentDidMount(){
  //dom操作放在这个里面    请求数据也放在这个里面
  console.log('04组件挂载完成');
}

// 数据跟新
//是否要更新数据  如果返回true才会执行更新数据的操作
shouldComponentUpdate(nextProps, nextState){
  console.log('01是否要更新数据');

  console.log('nextProps',nextProps,'nextState',nextState);

  return true;
}
//将要更新数据的时候触发
componentWillUpdate(){
  console.log('02组件将要更新');
}
//组件更新完成
componentDidUpdate(){
  console.log('04组件数据更新完成');
}

//组件销毁的时候触发的生命周期函数   用在组件销毁的时候执行操作
componentWillUnmount(){
  console.log('组件销毁了');
}

changeMsg=()=>{
  this.setState({
    msg:'改变后的msg'
  })
}
  render() {
    console.log('03数据渲染render');
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <br />
        <button onClick={this.changeMsg}>改变数据</button>
      </div>
    )
  }
}

export default Lifecycle