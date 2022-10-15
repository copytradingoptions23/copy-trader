import React, { useState } from 'react'
import './Verify.css'
import logo from '../../../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import MoonLoader from 'react-spinners/MoonLoader'

const Verify = () => {
    const navigate = useNavigate()
    const url = 'https://copytradingoptions1.herokuapp.com/api/user/complete-login'
    const [code, setCode] = useState("")
    const [error, setError] = useState("")
    const [loader, setLoader] = useState(false)
    const [cookies, setCookie] = useCookies(['user']);

    const Verify = async (e) => {
        e.preventDefault()
        setLoader(true)

        await axios.put(url, {
            pin: code
        })
            .then((response) => {
                if (response.data.message == "USER LOGGED IN") {
                    setLoader(false)
                    setCookie('userToken', response.data.loginToken, { path: '/' });
                    setCookie('userData', response.data.user, { path: '/' });
                    setError("verified")

                    if (response.data.user.role == "admin") {
                        window.location.href = '/admin';
                    } else if (response.data.user.role == "user") {
                        window.location.href = '/user/trading';
                    }
                } else {
                    setError("Invalid Code")
                    setLoader(false)
                }
                console.log(response)

            })
            .catch((err) => {
                setError("An error occured")
            })
    }

    return (
        <div className='verify-main'>
            <form className='verify-form'>
                <div className="verify-img">
                    <h3>Verification Code</h3>
                </div>
                <label className='ver-label ' for="username">Enter Code</label>
                <input className='ver-input' onChange={(e) => setCode(e.target.value)} type="text" required placeholder="Code" />
                {error &&
                    (
                        <p className='error' style={{ color: "red", marginBottom: 10 }}>{error}</p>
                    )
                }

                {loader ? (
                    <div className='log-spin'>
                        <MoonLoader color="red" />
                    </div>
                ) : (
                    <button className='ver-btn' onClick={Verify}>CONFIRM PIN</button>
                )}
                <div className='extra-text'>
                    <div className="forgot"></div>
                    <div className="resend">
                        RESEND CODE
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Verify