import React, { useContext, useState } from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'
import { useNavigate, NavLink } from "react-router-dom"
import axios from 'axios'
import { useCookies } from 'react-cookie';
import MoonLoader from 'react-spinners/MoonLoader'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loader, setLoader] = useState(false)

    const url = 'https://copytradingoptions1.herokuapp.com/api/user/login'


    const signIn = async (e) => {
        if (!email || !password) {
            return
        }

        e.preventDefault()
        setLoader(true)



        await axios.post(url, {
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response)
                setLoader(false)
                if (response.data.message == "ENTER PIN") {
                    console.log(response)

                    navigate("/verify-log")
                } else {
                    setError("Invalid email or password")
                }
            })
            .catch((err) => {
                setLoader(false)
                setError("An error occured check your details and try again")
            })

    }

    return (
        <div className='login-main'>
            <form className='login-form'>
                <div className="login-img">
                    <img src={logo} alt="" />
                </div>
                <label for="username">Email</label>
                <input className='log-input' onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Email" />

                <label for="password">Password</label>
                <input className='log-input' type="password" onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />

                {error &&
                    (
                        <p className='error'>{error}</p>
                    )
                }

                {loader ? (
                    <div className='log-spin'>
                        <MoonLoader color="red" />
                    </div>
                ) : (
                    <button className='log-btn' onClick={signIn} >Sign In</button>
                )}



                <div className='extra-text'>
                    <br />
                    <div className="forgot">
                        <NavLink to='/forgot' className="forgot">
                            Forgot Password?
                        </NavLink>
                    </div>
                    <div className="reg">
                        Dont have an account?
                        <NavLink to='/signup'>
                            Sign Up
                        </NavLink>

                    </div>
                </div>
            </form >

        </div >
    )
}

export default Login