import {NavLink} from 'react-router-dom'
import img1 from '../../assets/images/img1.svg'
import React from 'react';
import './header.scss'
import userIcon from '../../assets/images/user-icon.svg';

function Header(){
    return(
        <header className={'header'}>
            <NavLink to = '/' className={'header__logo'}>
                <img src={img1}  alt="logo"/>
            </NavLink>

            <div className={'header__userIcon'}>
                <img src={userIcon}  alt="usericon"/>
            </div>
            
        </header>
    )
}
export default Header   