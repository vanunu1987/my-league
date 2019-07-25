import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import GroupList from '../../components/GroupList/GroupList'
import groupService from '../../service/groupService'
import userService from '../../service/userService'
import Login from '../../components/Login/Login'
import BackDrop from '../../components/UI/Backdrop/Backdrop'


class Home extends Component {
    state = {
        groups: [],
        users: [],
        inputText: '',
        isLoginShow: false
    }

    async componentDidMount() {
        let groups = await groupService.loadGroups()
        let users = await userService.loadUsers()
        let teams = await groupService.loadTeams()
        console.log(teams);
        
        this.setState({ groups, users })
    }

    inputChangeHandler = inputText => {
        this.setState({ inputText })

    }

    searchGroupHandler = ev => {
        ev.preventDefault()
        this.setState(prevState => {
            let groups = prevState.groups.filter(group => group.name.toLowerCase().includes(prevState.inputText.toLowerCase()))
            return {
                inputText: '',
                groups
            }
        })
    }

    hendleBackDrop = () => {
        this.setState(prevState => {
            let isLoginShow = !prevState.isLoginShow
            return { isLoginShow }
        })
    }

    handleLogin = () => {
        this.setState({ isLoginShow: false })
    }

    render() {
        return (
            <>
                <p>{this.state.isLoginShow}</p>
                <Header
                    searchGroup={this.searchGroupHandler}
                    inputChange={this.inputChangeHandler}
                    inputValue={this.state.inputText}
                    users={this.state.users}
                />
                <GroupList groups={this.state.groups} />
                <Login show={this.state.isLoginShow} loginUser={this.handleLogin} />
                <BackDrop clicked={this.hendleBackDrop} show={this.state.isLoginShow} />

            </>
        );
    }
}

export default Home;