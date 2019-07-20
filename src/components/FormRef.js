import React, { Component } from 'react';

class FormRef extends Component{
  constructor(props){
    super(props)
    this.state={
      msg:'我是formRef组件',
      userName:""
    }
  }

  inputChange=(event)=>{
    // console.log(event.target.value)
    let val=this.refs.user.value
    this.setState({
      userName: val//event.target.value
    })
  }
  inputkeyUP=(event)=>{
    if(event.keyCode===13){
      alert(event.target.value)
    }
  }
  getValue=()=>{
    console.log('输入的值',this.state.userName)
  }

  render(){
    return (
      <div>
        {this.state.msg}

        <hr></hr>
        <input ref="user" onChange={this.inputChange} /> <button onClick={this.getValue}>获取表单输入的值</button>
        <hr></hr>
        <input onKeyUp={this.inputkeyUP} /> <button onClick={this.getValue}>测试键盘</button>
      </div>
    )
  }
}

export default FormRef