import React from 'react'
import InsideNav from '../../Dashboard/Deposit/InsideNav/InsideNav'
import './PayoutForm.scss'
import { MdAddCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useEffect } from 'react'
import MoonLoader from 'react-spinners/MoonLoader'

const PayoutAdd = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [from, setFrom] = useState("")
    const [amount, setAmount] = useState(0)
    const [action, setAction] = useState("")
    const [curr, setCurr] = useState("")
    const [loader, setLoader] = useState(false)
    const [msg, setMsg] = useState("")
    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/action/'


    const addPayOut = async (e) => {
        e.preventDefault()

        setLoader(true)

        console.log({
            "name": name,
            "from": from,
            "amount": amount,
            "action": action,
            "currency": curr
        })

        await axios.post(url, {
            name: name,
            from: from,
            amount: amount,
            action: action,
            currency: curr
        }, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then(function (response) {
                console.log(response)
                setLoader(false)
                if (response.data.message == "ACTION CREATED") {
                    console.log(response)
                    setMsg("Action Added")
                    navigate("/admin/payout/list")
                } else {
                    setMsg("Error Occured")
                }
            })
            .catch((err) => {
                setLoader(false)
                setMsg("An error occured check your details and try again")
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
            <InsideNav heading="Create PayOut" />
            <div className='payoutform-con'>
                <form className='payout-form'>
                    <label for="username">Name</label>
                    <input onChange={(e) => setName(e.target.value)} className='payout-input' type="text" required id="username" />

                    <label for="username">From</label>
                    <input onChange={(e) => setFrom(e.target.value)} className='payout-input' type="text" required id="username" />

                    <label for="username">Amount</label>
                    <input onChange={(e) => setAmount(e.target.value)} className='payout-input' type="number" required id="username" />

                    <label for="action">Action</label>
                    <select onChange={(e) => setAction(e.target.value)} name="action" id="" required>
                        <option value="">SELECT</option>
                        <option value="invested">Invested</option>
                        <option value="withDrew">Withdrew</option>
                    </select>

                    <label for="currency">Currency</label>
                    <select onChange={(e) => setCurr(e.target.value)} name="currency" id="" required>
                        <option value="">SELECT</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>

                    {loader ? (
                        <div className='log-spin'>
                            <MoonLoader color="red" />
                        </div>
                    ) : (
                        <button onClick={addPayOut} className='payout-btn'>Submit</button>
                    )}

                    <p style={{ width: "100%", textAlign: "center", margin: "20px 0", color: "#313bac" }}>{msg}</p>

                </form>


            </div>
        </>
    )
}

export default PayoutAdd