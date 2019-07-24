import React, { Component } from 'react'
import classes from './GroupPreview.module.css'
import { withRouter } from 'react-router-dom'

class GroupPreview extends Component {

    render() {
        let { users } = this.props.group
        let activeUsers = users.reduce((acc, u) => {
            if (u.isPlaying) acc++
            return acc
        }, 0)
        return (
            <div className={classes['preview-container']} style={{ backgroundImage: `url(${this.props.group.imgURL})` }}
                onClick={() => this.props.history.push('/group=' + this.props.group['_id'])}>
                <div className={classes['group-image']} ></div>
                <section className={classes['group-details']}>
                    <h2>{this.props.group.name}</h2>
                    <p>Currently Active: {activeUsers} / {users.length}</p>
                </section>
            </div>
        )
    }


}


export default withRouter(GroupPreview) 