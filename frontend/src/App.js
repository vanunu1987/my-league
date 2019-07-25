import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home/Home'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import About from './containers/About/About'
import GroupPage from './containers/GroupPage/GroupPage'
import Nav from './components/Nav/Nav'
import userService from './service/userService'
import Login from './components/Login/Login'


class App extends Component {
  state = {
    currUser: null
  }
  async componentDidMount() {
    let user = await userService.checkUser()
    this.setState({ currUser: user })
  }


  handleUserLogin = (user) => {
    this.setState({ currUser: user })
  }

  handleUserLogout = async () => {
    let { currUser } = this.state
    console.log('currUser : ',currUser);
    let response = await userService.logOutUser(currUser)
    console.log('response : ',response);
    this.setState({currUser:response})

  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav user={this.state.currUser} logOutUser={this.handleUserLogout}/>
          <Login show={!this.state.currUser}
            loginUser={(user) => this.handleUserLogin(user)} />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route path="/group=:id" component={GroupPage} />
            <Route path="/" render={(props) => <Home {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
