import React, { useState } from 'react'
import './Verify.css'
import logo from '../../../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import MoonLoader from 'react-spinners/MoonLoader'

const Forgot = () => {
    const navigate = useNavigate()
    const url = 'https://copytradingoptions1.herokuapp.com/api/user/forgot-password'
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [loader, setLoader] = useState(false)

    const handleForgot = async (e) => {
        e.preventDefault()
        setLoader(true)

        await axios.post(url, {
            email: email,
        },
        )
            .then(function (response) {
                console.log(response)
                setLoader(false)
                setError("email sent")

                if (response.data.message == "RESET PASSWORD LINK SENT TO THIS EMAIL") {

                } else {

                }

            })
            .catch((err) => {
                setLoader(false)
            })
    }

    return (
        <div className='verify-main'>
            <form className='verify-form'>
                <div className="verify-img">
                    <h3>please enter the email address attached to your account below</h3>
                </div>
                <label className='ver-label ' for="username">Email</label>
                <input className='ver-input' onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Email" />
                {error &&
                    (
                        <p className='error' style={{ color: "green", marginBottom: 10 }}>{error}</p>
                    )
                }

                {loader ? (
                    <div className='log-spin'>
                        <MoonLoader color="green" />
                    </div>
                ) : (
                    <button className='ver-btn' onClick={handleForgot}>SUBMIT</button>
                )}

            </form>

        </div>
    )
}

export default Forgot