import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Col, Image} from 'react-bootstrap'
import Drawer from './Drawer'
import './Menu.css'

const isActive = (history, path)=>{
    if(history.location.pathname === path){
        return {color: '#ff9'}
    }
    else{
        return {color: '#cccc'}
    }
}

var isMobile = () =>{
    return (window.innerWidth <= 760)
}

const Menu = ({history})=>{
    const items = [
        ['Home','/'],
        ['Shop','/shop'],
        ['About','/about'],
        ['Contact','/contact']
    ]
    return (
    <div >
        {isMobile()?<Drawer items={items}/>:
        <div>
            <ul className="nav navbar-custom mobile-hide" style={{fontSize: '2vw', verticalAlign: 'middle'}}>
                <Image fluid src="logo512.png" roundedCircle style={{width: '10vw', height: '10vw', marginRight: '10vw', marginLeft: '3vw'}}/>
                {items.map((item,i)=><li key={i}  className='nav-item custom-item' style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <Link className='nav-link' style={isActive(history,item[1])} to={item[1]}>{item[0]}</Link>
                </li>)}
            </ul>
            <div style={{height: '10vw', backgroundColor: '#3f51b5'}}></div>
        </div>
        }
    </div>
    )
}

export default withRouter(Menu)