import React, { Component } from 'react'

class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sex: '1',
      city: '',
      citys: [

        '北京', '上海', '深圳'
      ],
      hobby: [
        {
          'title': "睡觉",
          'checked': true
        },
        {
          'title': "吃饭",
          'checked': false
        },
        {
          'title': "敲代码",
          'checked': true
        }
      ],
      info: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  handelName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handelSex = (e) => {
    this.setState({
      sex: e.target.value
    })
  }
  handleCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }
  handleHobby=(index)=>{
    let hobby=this.state.hobby;
    hobby[index].checked=!hobby[index].checked
    this.setState({
      hobby:hobby
    })
  }
  handleInfo=(e)=>{
    this.setState({
      info:e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>react-Form表单</h1>
        <form onSubmit={this.handleSubmit}>
          用户名：<input type="text" value={this.state.name} onChange={this.handelName} /> <br />
          性别： <input type="radio" value="1" checked={this.state.sex == 1} onChange={this.handelSex} />男
          <input type="radio" value="2" checked={this.state.sex == 2} onChange={this.handelSex} />女
          居住城市: <select value={this.state.city} onChange={this.handleCity}>
            {
              this.state.citys.map(function (item, index) {
                return <option key={index}>{item}</option>
              })
            }
          </select>
          <br />
          爱好：{
            this.state.hobby.map((item,index)=>{
              return (
                <span key={index}>
                  <input type="checkbox" checked={item.checked} onChange={this.handleHobby.bind(this,index)} />{item.title}
                </span>
              )
            })
          }
          <br />
          <textarea value={this.state.info} onChange={this.handleInfo}></textarea>
          <br />
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}

export default ReactForm;