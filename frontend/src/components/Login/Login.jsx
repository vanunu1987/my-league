import React, {Component} from 'react'
import classes from './Login.module.scss'
import userService from '../../service/userService'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import BackDrop from '../UI/Backdrop/Backdrop'

class login extends Component {
    state = { 
        login : true,
        show: false,
        credentials: {
            name: null,
            pass: null,
            phone: null
        }
    }

    handleLoginSignUp = () => {
        this.setState(prevState => {
            let login = !prevState.login
            return {login}
        })
    }

    handleInputs = (ev,val)=>{
        this.setState(prevState => {
            let credentials = {...prevState.credentials}
            credentials[val] =  ev
            return {credentials}

        })
     }

    handleSubmitLogin = async (ev) => {
        ev.preventDefault()
        let {name,pass} = this.state.credentials
        let res = await userService.loginUser({name,pass})
        console.log('res : ',res);
        if (res) this.props.loginUser(res)
    }

    handleSubmitSignUp  = async (ev) => {
        ev.preventDefault()
        let res = await userService.signUpUser(this.state.credentials)
        if (res) this.props.loginUser(res)
    }

    render() { 
        let login = (  !this.state.login &&
        <SignIn classes={classes} submitLogin={this.handleSubmitLogin} inputChange={this.handleInputs}/>
        )

        let signup = ( this.state.login &&
        <SignUp classes={classes} submitSignUp={this.handleSubmitSignUp} inputChange={this.handleInputs}/>
        )

        let msg = (this.state.login) ? <span>Already have an account?&nbsp;</span> :<span>Don't have an account?&nbsp;</span>
        let loginSignUp = <span className={classes.signupLink} onClick={this.handleLoginSignUp}>{this.state.login ? ' Login' : ' Sing in'} </span>
        let body = this.props.show && <div className={classes.loginContainer}>
        <section className={classes.formContainer}>
            {login}
            {signup}
            {msg}
            {loginSignUp}
        </section>
    </div>

        return <> <BackDrop show={this.props.show} /> {body} </>

    }
}
 
export default login;