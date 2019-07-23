import React from 'react'
import classes from './ImageToggler.module.css'

const imageToggler = props => {
    let imgUrl = require(`../../../assets/images/player-${props.imgNum}.png`)
    return <div className={classes['player-image']} style={{backgroundImage:`url(${imgUrl})`}}></div>

}

export default imageToggler