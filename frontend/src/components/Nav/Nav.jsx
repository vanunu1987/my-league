import React from 'react' 
import {NavLink} from 'react-router-dom'
import classes from './Nav.module.css'

const nav = props => (
    <div className={classes.nav}>
        <NavLink to="/">Home</NavLink>|
        <NavLink to="/about">About</NavLink>
    </div>
)

export default nav 