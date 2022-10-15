import React from 'react'
import './PayoutList.scss'
import { AiTwotoneDelete } from 'react-icons/ai'
import InsideNav from '../../Dashboard/Deposit/InsideNav/InsideNav'
import { MdAddCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useState } from 'react'

const PayList = () => {
    const navigate = useNavigate()
    const [payout, setPayout] = useState(null)
    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/action/'

    useEffect(() => {
        const getPayOut = async () => {
            await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setPayout(response.data.actions)

                })
                .catch((err) => {
                    setPayout(null)
                })
        }

        getPayOut()

        console.log(payout)
    }, [])


    const deletePay = async (id) => {
        await axios.delete(`${url}/${id}`, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then(function (response) {
                console.log(response)
                window.location.href = "/admin/payout/list"
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            <InsideNav heading="PayOut List" />
            <div className='paylist-con'>
                <div className="paylist-search">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="paylist-card-con">
                    {
                        payout?.map((item) => (
                            <div className="paylist-card" onClick={() => deletePay(item._id)}>
                                <div className="paylist-box">

                                </div>
                                <div className="paylist-text">
                                    <p> {item.name} from {item.from} {item.cation} {item.currency} {item.amount}</p>
                                </div>
                                <div className="walletlist-btn">
                                    <AiTwotoneDelete />
                                </div>
                            </div>
                        ))
                    }


                </div>
                <div className="adminadd-btn" onClick={() => navigate("/admin/payout/add")}>
                    <MdAddCircle />
                </div>
            </div >
        </>
    )
}

export default PayList