import React, { Component } from 'react';
import Logo from './AlLogo.png';

export default class NavBar extends Component{ 
    render(){
        return(
            <div>
                <img src={Logo} width="50px" alt=""/>
            </div>
        )
    }
}