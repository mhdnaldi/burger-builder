import React from 'react'
import burgerLogo from '../../assets/Images/burger-logo.png'
import classes from './Logo.module.css'

const Logo = props => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img alt="logo" src={burgerLogo}></img>
    </div>
)

export default Logo