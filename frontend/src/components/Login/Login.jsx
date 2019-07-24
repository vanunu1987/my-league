import React, {Component} from 'react'
import classes from './Login.module.scss'
import userService from '../../service/userService'

class login extends Component {
    state = { 
        login : true,
        show: false,
        data: {
            userName: null,
            pass: null,
            phone: null
        }
     }


     hendelLoginSignin = ()=>{
         let updateLogin = !(this.state.login)
         this.setState({login:updateLogin})
     }

     hendlInputs = (ev,val)=>{
         let newData = {...this.state.data}
         newData[val] =  ev
         this.setState({data:newData})
         console.log(this.state.data);
         
     }

     hendelSubmitLogin (){
      userService.logedinUser(this.state.data)
     }
     hendelSubmitSignin (){
      userService.signinUser(this.state.data)
     }
    render() { 
        let login = (  !this.state.login&&
            <form className={classes.loginForm} action="" onSubmit={(ev)=>this.hendelSubmitLogin(ev.preventDefault())}>
                <header>
                    <h1>Login</h1>
                    <div>
                        <input className={classes.carId} type="text" placeholder="User Name" 
                        onChange={(event)=>this.hendlInputs(event.target.value,'userName')}/>
                        <i className="fas fa-user"></i>
                    </div>
                    <div>
                        <input className={classes.carPass} type="password" placeholder="Password"
                        onChange={(event)=>this.hendlInputs(event.target.value,'pass')}/>
                        <i className="fas fa-lock"></i>
                    </div>
                </header>
                <button type="submit">Log in </button>
            </form>

            )
        let signup = ( this.state.login&&
            <form className={classes.loginForm} action="" onSubmit={(ev)=>this.hendelSubmitSignin(ev.preventDefault())}>
                <header>
                    <h1>Signup</h1>
                    <div>
                        <input className={classes.carId} type="text" placeholder="User Name"
                        onChange={(event)=>this.hendlInputs(event.target.value,'userName')}/>
                        <i className="fas fa-user"></i>
                    </div>
                    <div>
                        <input className={classes.carPass} type="password" placeholder="password"
                        onChange={(event)=>this.hendlInputs(event.target.value,'pass')}/>
                        <i className="fas fa-lock"></i>
                    </div>
                    <div>
                        <input className={classes.carId} type="tel" placeholder="Phone Number"
                        onChange={(event)=>this.hendlInputs(event.target.value,'phone')}/>
                        <i className="fas fa-phone"></i>
                    </div>
                </header>
                <button type="submit">Sign up</button>
            </form>
        )    
        let msg = (this.state.login)? <span>Already </span> :<span>Don't </span>
        let loginSignin = (this.state.login)? 
        <span className={classes.signupLink} onClick={this.hendelLoginSignin}> Login</span> : 
        <span className={classes.signupLink} onClick={this.hendelLoginSignin}> Singin</span>
        let body = this.props.show && <div className={classes.loginContiner}>
        <section className={classes.home}>
            {login}
            {signup}
            {msg}
            <span>have an account?</span>
            {loginSignin}
        </section>
    </div>

        return (
            
            <>
                {body}
            </>
         );
    }
}
 
export default login;