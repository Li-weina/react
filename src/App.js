import React,{Component} from 'react'
import {HashRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import User from './pages/User'
import Login from './pages/Login'

export default class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <div className='nav'>
                        <Link to='/home'>首页</Link>
                        <Link to='/profile'>个人中心</Link>
                        <Link to='/user'>用户列表</Link>
                        <Link to='/login'>登录</Link>
                    </div>
                    <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/profile' component={Profile}></Route>
                        <Route path='/user' component={User}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Redirect to='/home'></Redirect>
                    </Switch>

                </div>
            </Router>
        )
    }
}
