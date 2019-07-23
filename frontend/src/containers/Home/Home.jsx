import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import GroupList from '../../components/GroupList/GroupList'
import groupService from '../../service/groupService'
import userService from '../../service/userService'


class Home extends Component {
    state = {
        groups: [],
        users:[],
        inputText:''
    }

    async componentDidMount() {
        let groups = await groupService.loadGroups()
        let users = await userService.loadUsers()
        this.setState({ groups,users })
    }

    inputChangeHandler = inputText => {
        this.setState({inputText})
        
    }
    
    searchGroupHandler = ev => {
        ev.preventDefault()
        this.setState(prevState => {
            let groups = prevState.groups.filter(group => group.name.toLowerCase().includes(prevState.inputText.toLowerCase()))
            return {
                inputText:'',
                groups
            }
        })
    }

    render() {
        return (
            <>
                <Header 
                searchGroup={this.searchGroupHandler}
                inputChange={this.inputChangeHandler}
                inputValue={this.state.inputText}
                users={this.state.users}
                />
                <GroupList groups={this.state.groups}/>
            </>
        );
    }
}

export default Home;