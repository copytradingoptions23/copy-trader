import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'
import InsideNav from '../../Dashboard/Deposit/InsideNav/InsideNav'
import './WalletForm.scss'
import MoonLoader from 'react-spinners/MoonLoader'
import { useEffect } from 'react'

const WalletUpdate = () => {
    const navigate = useNavigate()

    const { state } = useLocation();
    const { id } = state;

    console.log("id:", id)

    const [sym, setSym] = useState("")
    const [name, setName] = useState("")
    const [wal, setWal] = useState("")
    const [tag, setTag] = useState("")
    const [network, setNetwork] = useState("")

    const [singleWal, setSingleWal] = useState(null)
    const [loader, setLoader] = useState(false)
    const [msg, setMsg] = useState("")
    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/wallet/'

    console.log(`${url}/${id}`)

    useEffect(() => {
        const getWalletList = async () => {
            await axios.get(`${url}${id}`, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setSingleWal(response.data.wallet)

                    setSym(response.data.wallet.symbol)
                    setWal(response.data.wallet.walletAddress)
                    setNetwork(response.data.wallet.Network)
                    setTag(response.data.wallet.tag)
                    setName(response.data.wallet.fullName)

                })
                .catch((err) => {
                    setSingleWal(null)
                })
        }

        getWalletList()

        console.log(singleWal)

    }, [])

    const updateWal = async (e) => {
        e.preventDefault()
        setLoader(true)

        await axios.put(`${url}${id}`, {
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
                setLoader(false)
                console.log(response)
                window.location.href = "/admin/wallet/list"
            })
            .catch((err) => {
                setLoader(false)
                console.log(err)
            })
    }




    return (
        <>
            <InsideNav heading="Update Wallet" />
            <div className='walform-con'>
                <form className='wal-form'>
                    <label for="username">Symbol</label>
                    <input value={sym} onChange={(e) => setSym(e.target.value)} className='wal-input' type="text" required />

                    <label for="username">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className='wal-input' type="text" required />

                    <label for="username">Wallet Address</label>
                    <input value={wal} onChange={(e) => setWal(e.target.value)} className='wal-input' type="text" required />

                    <label for="username">Tag (Optional)</label>
                    <input value={tag} onChange={(e) => setTag(e.target.value)} className='wal-input' type="text" />

                    <label for="username">Network (Optional)</label>
                    <input value={network} onChange={(e) => setNetwork(e.target.value)} className='wal-input' type="text" />


                    {loader ? (
                        <div className='log-spin'>
                            <MoonLoader color="red" />
                        </div>
                    ) : (
                        <button className='wal-btn' onClick={updateWal}>Submit</button>
                    )}

                    <p style={{ width: "100%", textAlign: "center", margin: "20px 0", color: "#313bac" }}>{msg}</p>


                </form>


            </div>
        </>
    )
}

export default WalletUpdate