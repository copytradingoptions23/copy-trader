import React from 'react'
import './TraderList.scss'
import { AiTwotoneDelete } from 'react-icons/ai'
import InsideNav from '../../Dashboard/Deposit/InsideNav/InsideNav'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MdAddCircle } from 'react-icons/md'

const TraderList = () => {
    const navigate = useNavigate()

    const [trader, setTrader] = useState(null)
    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/deposits'

    useEffect(() => {
        const getTrader = async () => {
            await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setTrader(response.data.deposits)

                })
                .catch((err) => {
                    setTrader(null)
                })
        }

        getTrader()

        console.log(trader)
    }, [])


    const deleteTra = async (id) => {
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
            <InsideNav heading="Traders List" />
            <div className='traderlist-con'>
                <div className="traderlist-search">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="traderlist-card-con">
                    <div className="traderlist-card">
                        <div className="traderlist-img">
                            <img src="https://protradeoptions.live/uploads/images/1664319566CE58F48A-7F6C-404A-B09D-586541DFE14D.jpeg" alt="" />
                        </div>
                        <div className="traderlist-text">
                            <p>160<span> Coffee on the Blockchain</span></p>
                            <p>0 pending Requests</p>
                        </div>
                    </div>

                </div>
                <div className="adminadd-btn" onClick={() => navigate("/admin/trader/add")}>
                    <MdAddCircle />
                </div>
            </div>
        </>
    )
}

export default TraderList