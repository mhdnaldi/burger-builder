import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'

const Toolbar = props => (
    <div className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>...</nav>
    </div>
)

export default Toolbar