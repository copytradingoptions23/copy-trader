import React, { useState } from 'react'
import './Register.css'
import logo from '../../../assets/logo.png'
import { useNavigate, NavLink } from "react-router-dom"
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import MoonLoader from 'react-spinners/MoonLoader'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [country, setCountry] = useState("")
    const [currency, setCurrency] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [postCode, setPostCode] = useState(0)
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [error, setError] = useState("")
    const [loader, setLoader] = useState(false)

    const navigate = useNavigate()
    const url = 'https://copytradingoptions1.herokuapp.com/api/user/register'

    const SignUp = async (e) => {

        if (password != confirmPassword || email == "") {
            return
        }

        setLoader(true)

        await axios.post(url, {
            firstName: fname,
            lastName: lname,
            email: email,
            password: password,
            currency: currency,
            country: country,
            state: state,
            city: city,
            postCode: postCode,
            streetAddress: address,
            mobileNumber: number
        }
        )
            .then(function (response) {
                setLoader(true)
                console.log(response)

                navigate("/verify-reg")

            })
            .catch((err) => {
                setLoader(false)
                setError("An error occured check your details and try again")
            })
    }

    return (
        <div className='register-main'>
            <form className='reg-form'>
                <div className="reg-img">
                    <img src={logo} alt="" />
                </div>
                <label for="username">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required id="username" />

                <label for="password">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required id="password" />

                <label for="password">Confirm Password</label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required id="confirmPassword" />

                <label for="password">First Name</label>
                <input type="text" onChange={(e) => setFname(e.target.value)} placeholder="First Name" required id="firstName" />

                <label for="password">Last Name</label>
                <input type="text" onChange={(e) => setLname(e.target.value)} placeholder="Last Name" required id="lastName" />

                <label for="password">Country</label>
                <input type="text" onChange={(e) => setCountry(e.target.value)} placeholder="Country" required id="lastName" />

                <label for="password">State</label>
                <input type="text" onChange={(e) => setState(e.target.value)} placeholder="State" required id="lastName" />

                <label for="password">City</label>
                <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="City" required id="lastName" />

                <label for="password">Post Code</label>
                <input type="number" onChange={(e) => setPostCode(e.target.value)} placeholder="Post Code" required id="lastName" />

                <label for="password">Street Address</label>
                <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Street Address" required id="lastName" />

                <label for="password">Mobile Number</label>
                <input type="number" onChange={(e) => setNumber(e.target.value)} placeholder="Mobile Number" required id="lastName" />

                <label for="password">Currency</label>
                <select name="currency" onChange={(e) => setCurrency(e.target.value)} id="" required>
                    <option value="">SELECT</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>


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
                    <button className='log-btn' onClick={SignUp}>Sign Up</button>
                )}
                <div className='extra-text'>
                    <div className="reg">
                        Already Have an Account?
                        <NavLink to="/login">
                            Log In
                        </NavLink>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Register