import React, { useState } from 'react'
import './Verify.css'
import logo from '../../../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import axios from 'axios'

const VerifyReg = () => {
    const navigate = useNavigate()
    const url = 'https://copytradingoptions1.herokuapp.com/api/user/confirm-email'
    const [code, setCode] = useState("")

    const { user, token } = useContext(UserContext)
    console.log('User', user)
    console.log('token', token)


    const Verify = async (e) => {
        e.preventDefault()

        await axios.put(url, {
            pin: code

        })
            .then((response) => {
                if (response.data.message == "USER LOGGED IN") {
                    navigate('/user/trading')
                } else {
                    alert("Error occured")
                }

                console.log(response)
                // navigate('/user/trading')
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

                <button className='ver-btn' onClick={Verify}>CONFIRM PIN</button>
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

export default VerifyReg