import React, { Component } from 'react';



class ShopEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个商户组件'
         };
    }    
    render() {
        return (
            <div className="shop">
                编辑商户
            </div>
        );
    }
}

export default ShopEdit;
