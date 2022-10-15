import React from 'react'
import './WalletList.scss'
import { AiTwotoneDelete } from 'react-icons/ai'
import InsideNav from '../../Dashboard/Deposit/InsideNav/InsideNav'
import { MdAddCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
import { useEffect } from 'react'

const WalletList = () => {
    const navigate = useNavigate()

    const [walletList, setWalletList] = useState(null)
    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/wallet/'

    useEffect(() => {
        const getWalletList = async () => {
            await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setWalletList(response.data.wallets)

                })
                .catch((err) => {
                    setWalletList(null)
                })
        }

        getWalletList()

        console.log(walletList)
    }, [])

    const deleteWal = async (id) => {
        await axios.delete(`${url}/${id}`, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then(function (response) {
                console.log(response)
                window.location.href = "/admin/wallet/list"
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <InsideNav heading="Wallet List" />
            <div className='walletlist-con'>
                <div className="walletlist-card-con">
                    {
                        walletList?.map((item) => (
                            <div className="walletlist-card" onClick={() => navigate('/admin/wallet/update', { state: { id: item._id } })}>
                                <div className="walletlist-text">
                                    <p><span> {item.walletAddress}</span></p>
                                    <p>{item.symbol} {item.fullName}</p>
                                </div>
                                <div className="walletlist-btn" onClick={() => deleteWal(item._id)}>
                                    <AiTwotoneDelete className='walletlist-btn' />
                                </div>
                            </div>
                        ))

                    }

                </div>
                <div className="adminadd-btn" onClick={() => navigate("/admin/wallet/create")}>
                    <MdAddCircle />
                </div>
            </div>
        </>
    )
}

export default WalletList