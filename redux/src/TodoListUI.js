import React, { Component } from 'react';

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div>
      <div style={{ margin: '10px' }}>
        <Input
          placeholder={props.inputValue}
          style={{ width: '250px', marginRight: '10px' }}
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button type="primary" onClick={props.handleBtn}>增加</Button>

        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (<List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>)} />
        </div>
      </div>
    </div>
  )
}
/* class TodoListUI extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <div style={{ margin: '10px' }}>
          <Input
            placeholder={this.props.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.props.changeInputValue}
            value={this.props.inputValue}
          />
          <Button type="primary" onClick={this.props.handleBtn}>增加</Button>

          <div style={{ margin: '10px', width: '300px' }}>
            <List
              bordered
              dataSource={this.props.list}
              renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)} />
          </div>
        </div>
      </div>
    );
  }
} */
// onClick={this.deleteItem.bind(this, index)}
export default TodoListUI;