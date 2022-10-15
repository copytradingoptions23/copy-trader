import React from 'react'
import InsideNav from '../../Dashboard/Deposit/InsideNav/InsideNav'
import './TraderList.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useEffect } from 'react'
import MoonLoader from 'react-spinners/MoonLoader'

const TraderAdd = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [win, setWin] = useState(0)
    const [loss, setLoss] = useState(0)
    const [share, setShare] = useState(0)
    const [type, setType] = useState("")
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState("")
    const [loader, setLoader] = useState(false)
    const [msg, setMsg] = useState("")
    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/trader'


    const addTrader = async (e) => {
        e.preventDefault()

        setLoader(true)



        await axios.post(url, {
            name: name,
            winsOffSet: win,
            lossOffSet: loss,
            profitShare: share,
            type: type
        }, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then(function (response) {
                console.log(response)
                setLoader(false)
                if (response.data.message == "TRADER CREATED") {
                    console.log(response)
                    setMsg("Action Added")
                    navigate("/admin/trader/list")
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
            <InsideNav heading="Create Trader" />
            <div className='payoutform-con'>
                <form className='payout-form'>
                    <label for="username">Name</label>
                    <input onChange={(e) => setName(e.target.value)} className='payout-input' type="text" required id="username" />

                    <label for="username">Wins Offset</label>
                    <input onChange={(e) => setWin(e.target.value)} className='payout-input' type="number" required id="username" />

                    <label for="username">Losses Offset</label>
                    <input onChange={(e) => setLoss(e.target.value)} className='payout-input' type="number" required id="username" />

                    <label for="username">Profit Share</label>
                    <input onChange={(e) => setShare(e.target.value)} className='payout-input' type="number" required id="username" />

                    <label for="action">Type</label>
                    <select onChange={(e) => setType(e.target.value)} name="action" id="" required>
                        <option value="">SELECT</option>
                        <option value="Human">Human</option>
                        <option value="Bot">Bot</option>
                    </select>

                    <label for="username">Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} className='payout-input' type="number" required id="username" />

                    <label for="username">Description</label>
                    <input onChange={(e) => setDesc(e.target.value)} className='payout-input' type="text" required id="username" />



                    {loader ? (
                        <div className='log-spin'>
                            <MoonLoader color="red" />
                        </div>
                    ) : (
                        <button onClick={addTrader} className='payout-btn'>Submit</button>
                    )}

                    <p style={{ width: "100%", textAlign: "center", margin: "20px 0", color: "#313bac" }}>{msg}</p>

                </form>


            </div>
        </>
    )
}

export default TraderAdd