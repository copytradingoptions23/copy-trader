import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import './Address.scss'
import MoonLoader from 'react-spinners/MoonLoader'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Address = () => {
    const navigate = useNavigate()

    const [street, setStreet] = useState("")
    const [zip, setZip] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")

    const [cookies, setCookie] = useCookies(['user']);
    const [msg, setMsg] = useState("")
    const [loader, setLoader] = useState(false)


    const url = 'https://copytradingoptions1.herokuapp.com/api/account-service/update-address'

    const changeAddress = async (e) => {
        e.preventDefault()

        setLoader(true)

        await axios.put(url, {
            city: city,
            state: state,
            streetAddress: street,
            country: country,
            postCode: zip
        }, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then(function (response) {
                console.log(response)
                setLoader(false)
                setCookie('userData', response.data.user, { path: '/' })
                if (response.data.message == "IMAGE UPLOADED") {
                    setMsg("Address Changed")
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
        <div className='emailform-con'>
            <form className='email-form'>
                <label for="username">Street Name</label>
                <input onChange={(e) => setStreet(e.target.value)} className='email-input' type="text" required />

                <label for="username">Zip Code</label>
                <input onChange={(e) => setZip(e.target.value)} className='email-input' type="text" required />

                <label for="username">City</label>
                <input onChange={(e) => setCity(e.target.value)} className='email-input' type="text" required />

                <label for="username">State</label>
                <input onChange={(e) => setState(e.target.value)} className='email-input' type="text" required />

                <label for="username">Country</label>
                <input onChange={(e) => setCountry(e.target.value)} className='email-input' type="text" required />

                {loader ? (
                    <div className='log-spin'>
                        <MoonLoader color="red" />
                    </div>
                ) : (
                    <button className='email-btn' onClick={changeAddress}>Update</button>
                )}

                <p style={{ width: "100%", textAlign: "center", margin: "20px 0", color: "#313bac" }}>{msg}</p>

            </form>
        </div>

    )
}

export default Address