import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import './Email.scss'
import MoonLoader from 'react-spinners/MoonLoader'
import { useEffect } from 'react'

const Email = () => {
    const navigate = useNavigate()
    const [newEmail, setNewEmail] = useState("")
    const [token, setToken] = useState("")
    const [cookies, setCookie] = useCookies(['user']);
    const [msg, setMsg] = useState("")
    const [loader, setLoader] = useState(false)
    const [loader2, setLoader2] = useState(false)

    const url = 'https://copytradingoptions1.herokuapp.com/api/account-service/token'
    const url2 = 'https://copytradingoptions1.herokuapp.com/api/account-service/update-email'

    const requestChangeEmail = async (e) => {
        e.preventDefault()
        setLoader(true)

        await axios.post(url, {
            email: cookies.userData.email
        }, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then(function (response) {
                console.log(response)
                setLoader(false)
                if (response.data.message == "TOKEN SENT!") {
                    setMsg("Token Sent")

                } else {
                    setMsg("Error Occured")
                }

            })
            .catch((err) => {
                setLoader(false)
                setMsg("Server Error")
            })
    }

    const changeEmail = async (e) => {
        e.preventDefault()
        setLoader2(true)

        await axios.put(url2, {
            email: newEmail,
            email_token: token
        }, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then((response) => {
                setLoader2(false)
                setCookie('userData', response.data.user, { path: '/' })
                setMsg("Email Changed")
                window.location.href = '/account'
            })
            .catch((err) => {
                setMsg("Server Error")
                setLoader2(false)
            })
    }




    useEffect(() => {
        if (cookies.userToken) {
            console.log("authorized")
        } else {
            navigate('/login')
        }
    }, [cookies])

    return (
        <div className='emailform-con'>
            <form className='email-form'>

                <label for="username">Token</label>
                <input onChange={(e) => setToken(e.target.value)} className='email-input' type="text" required />


                <label for="username">New Email</label>
                <input onChange={(e) => setNewEmail(e.target.value)} className='email-input' type="email" required />

                {loader2 ? (
                    <div className='log-spin'>
                        <MoonLoader color="red" />
                    </div>
                ) : (
                    <button onClick={changeEmail} className='email-btn'>Submit</button>
                )}

                <p style={{ width: "100%", textAlign: "center", margin: "20px 0", color: "#313bac" }}>{msg}</p>

                {loader ? (
                    <div className='log-spin'>
                        <MoonLoader color="red" />
                    </div>
                ) : (

                    <p onClick={requestChangeEmail} className='email-btn-req'>Request Token</p>
                )}


            </form>
        </div>

    )
}

export default Email