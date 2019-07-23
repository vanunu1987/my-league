import React,{Component} from 'react'
import classes from './GroupPreview.module.css'
import {withRouter} from 'react-router-dom'

class GroupPreview  extends Component {
   
    render(){

        return(
            <div className={classes['preview-container']}
            onClick={()=>this.props.history.push('/group'+this.props.group['_id'])}>
                <div className={classes['group-image']} style={{backgroundImage:`url(${this.props.group.imgURL})`}}></div>
                <section className={classes['group-details']}>
                    <h2>{this.props.group.name}</h2>
                    <p></p>
                </section>
            </div>
        )
    }
    
    
}


export default withRouter(GroupPreview) 