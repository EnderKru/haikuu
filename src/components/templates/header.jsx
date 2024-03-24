import {NavLink} from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import React from 'react';
import './header.css'
function Header(){
    return(
        <header>
            <NavLink to = '/'>
                <img className='logo' scr={logo}/>
            </NavLink>
        </header>
    )
}
export default Header   