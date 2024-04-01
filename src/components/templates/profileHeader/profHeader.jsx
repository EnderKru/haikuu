import {useState} from "react"
import React from 'react'
import { UserContext, userSignOut } from "../../../App"
import classes from './profHeader.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/img1.svg'
import ava from '../../../assets/images/ava.svg'
 
export function ProfileHeader() {
    const [user, setUser] = React.useContext(UserContext)
    const toggleUserState = () => {
      setUser((prevUser) => !prevUser);
    };

    const handleLogOut =() => {
      userSignOut()
  }
  return (
    <div className={classes.header}>
      <div className={classes.conteiner}>
        <NavLink to='/'>
          <img className={classes.logo} src={logo}/> 
        </NavLink>
        <div className={classes.rightSide}>
          <div className={classes.customToolTip}>
            <img src={ava} alt="Mini Photo" className={classes.userImg} />
            <div className={classes.tooltiptext}>
              <NavLink to="/">
                <div className={classes.logOut} onClick={handleLogOut}>log out</div>
              </NavLink>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
  }

