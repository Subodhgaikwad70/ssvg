import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import close_icon from '../assets/xmark-solid.svg';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {

    const navigate = useNavigate()

    console.log(props.loginPopup);

    const [loginData, setLoginData] = useState({action:'login'});
    const [signData, setSignData] = useState({action:'register'});

    const handleLoginChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginData(users => ({...users, [name]: value }));
    }

    const handleSignUpChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSignData(users => ({...users, [name]: value }));
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        
        axios.post('http://localhost:80/api/users/save', loginData).then(function(response){
            console.log(response.data);
            alert(response.data.message);
            if(response.data.status == 1) {
                props.setPopup();
                navigate('dashboard', {replace: true});
            }
        });
        console.log("Login data :" ,loginData);
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:80/api/users/save', signData).then(function(response){
            console.log(response.data);
            alert(response.data.message);
            if(response.data.status == 1) {
                props.setPopup();
            }
        });
        console.log("Sign data :",signData);
    }

    const handleClose = () => {
        props.setPopup();
        navigate(-1);
    } 

    return (
        <>
            {props.loginPopup === "open" ? 
            <section className="login">
                <div className="container">
                    <i onClick={handleClose} ><img src={close_icon} alt="" /></i>
                    <input type="checkbox" id="register_toggle" />
                        <div className="slider">
                            <form action='login' onSubmit={handleLoginSubmit} className="form">
                                <span className="title">Login</span>
                                <div className="form_control">
                                    <input type="text" name={"username"} onChange={handleLoginChange} className="input" required="" placeholder='Email' />
                                </div>
                                <div className="form_control">
                                    <input type="password" name={"password"} onChange={handleLoginChange} className="input" required="" placeholder='Password' />
                                </div>
                                <button>Login</button>

                                <span className="bottom_text">Don't have an account? <label for="register_toggle" className="swtich">Sign
                                    Up</label> </span>
                            </form>
                            <form className="form" action='register' onSubmit={handleSignUp}>
                                <span className="title">Sign Up</span>
                                <div className="form_control">
                                    <input type="text" className="input" onChange={handleSignUpChange} name={"name"} required="" placeholder='Name'/>
                                </div>
                                <div className="form_control">
                                    <input type="email" className="input" onChange={handleSignUpChange} name={"username"} required="" placeholder='Email'/>
                                </div>
                                <div className="form_control">
                                    <input type="password" className="input" onChange={handleSignUpChange} name={"password"} required="" placeholder='Password' />
                                </div>
                                <button>Sign Up</button>
                                <span className="bottom_text">Already have an account? <label for="register_toggle" className="swtich">Sign In</label> </span>
                            </form>
                        </div>
                </div>
            </section> : "" }
        </>
    )
}

export default Login