import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import './Password.scss'
import MoonLoader from 'react-spinners/MoonLoader'
import { useEffect } from 'react'

const Password = () => {
    const navigate = useNavigate()

    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const [msg, setMsg] = useState("")
    const [cookies, setCookie] = useCookies(['user']);


    const url = 'https://copytradingoptions1.herokuapp.com/api/user/reset-current-password'

    const changePassword = async (e) => {
        e.preventDefault()
        if (newPassword !== confirmPassword) {
            setMsg("Password Does Not Match")
            return
        }


        setLoader(true)

        await axios.put(url, {
            currentPassword: password,
            newPassword: newPassword
        }, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then(function (response) {
                console.log(response)
                setLoader(false)
                setCookie('userData', response.data.user, { path: '/' })
                if (response.data.message == "PASSWORD CHANGED") {
                    setMsg("Password Changed")
                    window.location.href = '/account'
                } else {
                    setMsg("Error Occured")
                }

            })
            .catch((err) => {
                setLoader(false)
                setMsg("Server Error")
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
        <>
            <div className='passform-con'>
                <form className='pass-form'>
                    <label for="username">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='pass-input' type="password" required />

                    <label for="username">New Password</label>
                    <input onChange={(e) => setNewPassword(e.target.value)} className='pass-input' type="password" required />

                    <label for="username">Confirm New Password</label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} className='pass-input' type="password" required />

                    {loader ? (
                        <div className='log-spin'>
                            <MoonLoader color="red" />
                        </div>
                    ) : (
                        <button className='pass-btn' onClick={changePassword}>Submit</button>
                    )}

                    <p style={{ width: "100%", textAlign: "center", margin: "20px 0", color: "#313bac" }}>{msg}</p>



                </form>
            </div>
        </>
    )
}

export default Password