import React from 'react'
import classes from './SearchBar.module.css'

const searchBar = props => (
    <form className={classes.search} onSubmit={ev => props.searchGroup(ev)}>
        <h1>Join one of our 1000+ Toto groups <br></br> And start playing!</h1>
        <input type="text" onChange={ev => props.inputChange(ev.target.value)} value={props.inputValue}/>
        <button type="submit">Go</button>
    </form>
)

export default searchBar