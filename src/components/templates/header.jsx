import {Navlink} from 'react-router-dom'
import React from 'react';
export function Header(){
    return(
        <Header>
            <Navlink to = '/'>
                <img class='logo' scr='./src/assets/images/logo.svg'/>
            </Navlink>
        </Header>
    )
}