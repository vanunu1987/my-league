import React from 'react' 
import {NavLink} from 'react-router-dom'
import classes from './Nav.module.css'

const nav = props => (
    <div className={classes.nav}>
        <section className={classes.links}>
            <NavLink to="/">Home</NavLink>|
            <NavLink to="/about">About</NavLink>
        </section>
        <section className={classes['nav-user']}>
            <h4>{props.user && 'Hello ' + props.user.name}</h4>&nbsp;
            <button onClick={props.logOutUser}>Log Out</button>
        </section>
    </div>
)

export default nav 