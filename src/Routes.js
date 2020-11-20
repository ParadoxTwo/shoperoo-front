import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signin from './User/Signin'
import Signup from './User/Signup'
import Home from './Core/Home'
import Menu from './Core/Menu'
import Admin from './Core/Admin'
import Shop from './Core/Shop'
import About from './Core/About'
import Contact from './Core/Contact'

const Routes = ()=>{
    const items = [
        [Home,'/'],
        [Shop,'/shop'],
        [About,'/about'],
        [Contact,'/contact'],
    ]
    return (
        <div >
        <BrowserRouter>
            <Menu/>
            <Switch>
                {items.map((item,i)=><Route  key={i} path={item[1]} exact component={item[0]}/>)}
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default Routes