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
import Footer from "./Core/Footer";


const Routes = ()=>{
    const items = [
        [Home,'/'],
        [Shop,'/shop'],
        [About,'/about'],
        [Contact,'/contact'],
        [Admin, '/admin']
    ]
    return (
        <div >
        <BrowserRouter>
            <Menu/>
            <Switch>
                {items.map((item,i)=><Route  key={i} path={item[1]} exact component={item[0]}/>)}
            </Switch>
            <Footer/>
        </BrowserRouter>
        </div>
    )
}

export default Routes