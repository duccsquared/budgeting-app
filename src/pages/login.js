import React from 'react';
import {MainSection, BtnMain, BtnSecondary, H1, H2, H3, P, Table, THead, TBody, TR1, TR2, TH, TD, CheckBox, RadioBox, SubSection, BtnMinim, InputDate, Input} from '../components.js';
import { useNavigate } from 'react-router-dom';
class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            isLogin: true,
            error: ""
        }
        this.props.setLoggedIn(false)
    }
    clearError() {
        this.setState({error: ""})
    }
    findUserByUsername(username) {
        for(let i in this.props.userList) {
            let user = this.props.userList[i]
            if(user.username===username) {
                return user 
            }
        }
        return null 
    }
    onLogin() {
        let username = this.state.username 
        let password = this.state.password
        let user = this.findUserByUsername(username)
        if(user===null) {
            this.setState({error: "username not found"})
            return false 
        }
        if(password!==user.password) {
            this.setState({error: "incorrect password"})
            return false 
        }
        this.props.setUser(user)
        this.props.setLoggedIn(true)
        return true
    }
    onRegister() {
        let username = this.state.username 
        let password = this.state.password
        if(username.length===0) {
            this.setState({error: "please enter a username"})
            return false 
        }
        if(this.findUserByUsername(username)!==null) {
            this.setState({error: "the username has already been taken, please use a different username"})
            return false
        }
        if(password.length===0) {
            this.setState({error: "please enter a password"})
            return false 
        }
        if(password!==this.state.confirmPassword) {
            this.setState({error: "confirmed password needs to be identical to the password"})
            return false 
        }

        let user = this.props.addUser(username,password)
        this.props.setLoggedIn(true)
        console.log(user)
        this.props.setUser(user)
        return true
    }
    render() {
        return (
            <MainSection>
                <div className="h-10"/>
                {this.state.isLogin?<H2>Login User Account</H2>:<H2>Register User Account</H2>}
                <div className="h-10"/>
                <div className="inline-flex">
                    <P>username:</P>
                    <div className="w-2"/>
                    <Input onChange={(e) => this.setState({username: e.target.value})}/>
                </div>
                <div className="h-10"/>
                <div className="inline-flex">
                    <P>password:</P>
                    <div className="w-2"/>
                    <Input type="password" onChange={(e) => this.setState({password: e.target.value})}/>
                </div>
                <div className="h-10"/>
                
                {
                this.state.isLogin?
                // for logging in
                <div>
                    <LoginButton onLogin={()=>this.onLogin()}/>
                    <BtnSecondary onClick={() => {this.clearError();this.setState({isLogin: false})}}>Register new account</BtnSecondary>
                </div>
                : // for registering a new account
                <div>
                    <div className="inline-flex">
                        <P>confirm password:</P>
                        <div className="w-2"/>
                        <Input type="password" onChange={(e) => this.setState({confirmPassword: e.target.value})}/>
                    </div>
                    <div className="h-10"/>
                    <RegisterButton onRegister={()=>this.onRegister()}/>
                    <BtnSecondary onClick={() => {this.clearError();this.setState({isLogin: true})}}>Login into existing account</BtnSecondary>
                </div>
                }
                <div className="h-4"/>
                <P className="text-red-400">{this.state.error}</P>
            </MainSection>
        )
    }
}

function LoginButton(props) {
    let navigate = useNavigate()
    let func = () => {
        let result = props.onLogin()
        if(result===true) {
            navigate("/tableDisplay")
        }
    }
    return (
        <BtnMain onClick={func}>
            Login
        </BtnMain>
    )
}
function RegisterButton(props) {
    let navigate = useNavigate()
    let func = () => {
        let result = props.onRegister()
        if(result===true) {
            navigate("/tableDisplay")
        }
    }
    return (
        <BtnMain onClick={func}>
            Register
        </BtnMain>
    )
}

export default LoginPage;