import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import InsideNav from '../../Dashboard/Deposit/InsideNav/InsideNav'
import './WalletForm.scss'
import MoonLoader from 'react-spinners/MoonLoader'

const WalletAdd = () => {
    const navigate = useNavigate()

    const [sym, setSym] = useState("")
    const [name, setName] = useState("")
    const [wal, setWal] = useState("")
    const [tag, setTag] = useState("")
    const [network, setNetwork] = useState("")
    const [loader, setLoader] = useState(false)
    const [msg, setMsg] = useState("")
    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/wallet/'


    const addWallet = async (e) => {
        e.preventDefault()

        setLoader(true)

        await axios.post(url, {
            symbol: sym,
            fullName: name,
            walletAddress: wal,
            tag: tag,
            Network: network
        }, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then(function (response) {
                console.log(response)
                setLoader(false)
                if (response.data.message == "WALLET CREATED") {
                    console.log(response)
                    setMsg("Wallet Added")
                    navigate("/admin/wallet/list")
                } else {
                    setMsg("Error Occured")
                }
            })
            .catch((err) => {
                setLoader(false)
                setMsg("An error occured check your details and try again")
            })
    }

    return (
        <>
            <InsideNav heading="Add Wallet" />
            <div className='walform-con'>
                <form className='wal-form'>
                    <label for="username">Symbol</label>
                    <input onChange={(e) => setSym(e.target.value)} className='wal-input' type="text" required />

                    <label for="username">Name</label>
                    <input onChange={(e) => setName(e.target.value)} className='wal-input' type="text" required />

                    <label for="username">Wallet Address</label>
                    <input onChange={(e) => setWal(e.target.value)} className='wal-input' type="text" required />

                    <label for="username">Tag (Optional)</label>
                    <input onChange={(e) => setTag(e.target.value)} className='wal-input' type="text" />

                    <label for="username">Network (Optional)</label>
                    <input onChange={(e) => setNetwork(e.target.value)} className='wal-input' type="text" />

                    {loader ? (
                        <div className='log-spin'>
                            <MoonLoader color="red" />
                        </div>
                    ) : (
                        <button onClick={addWallet} className='wal-btn'>Submit</button>
                    )}

                    <p style={{ width: "100%", textAlign: "center", margin: "20px 0", color: "#313bac" }}>{msg}</p>


                </form>


            </div>
        </>
    )
}

export default WalletAdd