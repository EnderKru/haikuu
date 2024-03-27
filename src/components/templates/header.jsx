import {NavLink} from 'react-router-dom'
import img1 from '../../assets/images/img1.svg'
import React from 'react';
import './header.scss'
import { IoPersonCircleOutline } from "react-icons/io5";

function Header(){
    return(
        <header className={'header'}>
            <NavLink to = '/'>
                <img src={img1} className={'header__img'} alt=""/>
            </NavLink>

            <span className={'header__logo'}>
                <IoPersonCircleOutline />
            </span>
        </header>
    )
}
export default Header   