import React from 'react'
import classes from './GroupList.module.css'
import GroupPreview from './GroupPreview/GroupPreview'

const groupList = props =>  (

        <ul className={classes['group-list']}>
          {props.groups.map(group => {
              return <li><GroupPreview 
              key={group._id} 
              group={group}/></li> 
            })}
        </ul>

)

export default groupList