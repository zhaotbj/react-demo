import React, { Component } from 'react';

import '../assets/news.css'
import img from '../assets/images/5c048b414a918.jpg'
class News extends Component{
  constructor(props){
    super(props)
    this.state={
      msg:'我是news组件',
      list:['1111','2222','33333'],
      list1:[<h1 key='1'>1111</h1>, <h1 key="2">22222</h1>],
      list2:[{title:'标题1'}, {title:'标题2'}]
    }
  }

  render(){
    var result=this.state.list.map(function(item,index){
      return (
        <li key={index}>{item}</li>
      )
    })
    return (
      <div className="news">
        <h1>{this.state.msg}</h1>
        <br/>
        <img src={img} alt=""></img>
        <img src={require('../assets/images/5c048b414a918.jpg')} alt=""></img>
        <img src={require('../assets/images/5c048b414a918.jpg')} alt=""></img>
        <img src="https://tse1-mm.cn.bing.net/th?id=OET.782bd77cf1424a359e31d0015d2ee001&w=272&h=272&c=7&rs=1&o=5&pid=1.9" alt=""></img>

        <br/>

        {/* {this.state.list1} */}
        <br/>
        {result}
        <br/>
      <ul>
        {
          this.state.list2.map((item,index)=>{
            return <li key={index}>{item.title}</li>
          })
        }
      </ul>
      </div>
    )
  }
}


export default News