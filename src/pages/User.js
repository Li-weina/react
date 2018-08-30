import React, { Component } from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import Add from './Add'
import List from './List'
export default class User extends Component {
  render() {
    return (
      <div className='sub-nav'>
        <div>
            <Link to='/user/add'>添加用户</Link>
            <Link to='/user/list'>用户列表</Link>
        </div>
    
            <Switch>
                <Route path='/user' exact={true} component={Add}></Route>
                <Route path='/user/add' component={Add}></Route>
                <Route path='/user/list' component={List}></Route>
            </Switch>
       
      </div>
    )
  }
}
