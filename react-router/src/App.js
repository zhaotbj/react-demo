import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css'

import router from './model/router'
class App extends Component {

  render() {
    return (
      <Router>

        <div >
          <header className="title">
            <Link to="/">首页组件</Link>
            <Link to="/user">用户页面</Link>
            <Link to="/shop">商户</Link>
            <Link to="/news">新闻</Link>
          </header>

        {
          router.map((route,key)=>{
            if(route.exact){
              return <Route  exact key={key} path={route.path} render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
              )} />
            } else {
              return <Route  key={key} path={route.path} render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
              )} />
            }
          })
        }
        </div>
      </Router>
    )
  }
}
export default App;