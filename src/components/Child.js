import React, { Component } from 'react'

import PropTypes from 'prop-types';
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  getParent=()=>{
    console.log(this.props.Parent)
  }
  render() { 
    return ( 
      <div>
        <h3>我是子组件</h3>
        父组件传递的数据---{this.props.title} --- {this.props.count}
        <br /><br />
        <button onClick={this.props.run}>接受父组件方法</button>
        <br /><br />
        <button onClick={this.getParent}>接受父组件整个实例</button>
        <br /><br />
        {/* 子传夫 */}
        <button onClick={this.props.Parent.chlidToParent.bind(this, '我是子组件数据')}>子传夫</button>
      </div>
     );
  }
}

// 默认值
Child.defaultProps={
  title:"默认值"
}
//同行propTypes定义父组件给子组件传值的类型
Child.propTypes={
  count:PropTypes.number
}
export default Child;