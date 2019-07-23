import React from 'react'
import trophy from '../../assets/img/trophy.png'
import classes from '../LeadChart/LeadChart.module.css'


const leadchart = (props) => {
    const topList = props.users.map((user, idx) => {
        return (
            <tr key={user._id}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.score} {user.rank === 1 ? <img src={trophy} alt="" /> : null}</td>
            </tr>
        )
    })
    return (
        <div className={classes.chartContiner}>
            <h1>Top Ranked Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {topList}
                </tbody>
            </table>
        </div>
    )
}
export default leadchart 