import React from "react"
import "./Withdrawals.scss"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect, useState } from "react"
import axios from "axios"
import InsideNav from "../../Deposit/InsideNav/InsideNav"

const Withdrawals = () => {
    const navigate = useNavigate()
    const [withdraw, setWithdraw] = useState(null)

    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/withdraw'


    useEffect(() => {
        if (cookies.userToken) {
            console.log("authorized")
        } else {
            navigate('/login')
        }
    }, [cookies])

    useEffect(() => {
        const getWithdraw = async () => {
            await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setWithdraw(response.data.cryptoWithDraw)

                })
                .catch((err) => {
                    setWithdraw(null)
                })
        }

        getWithdraw()

        console.log(withdraw)
    }, [])


    return (
        <>
            <InsideNav heading="Deposit" />
            <div className="deposit__container">
                <div className="deposit__button__div">
                    <button onClick={() => navigate("/withdrawal/withdrawalMethod")} className="deposit__button">
                        NEW WITHDRAWAL REQUEST
                    </button>
                </div>

                {!withdraw && (
                    <div className="deposit__content__div">
                        <p className="deposit__no__p">NO WITHDRAWALS YET</p>
                    </div>

                )}


                {
                    withdraw?.map((item) => (
                        <div className="deposit__content__div-on">
                            <div className="deposit__con">
                                <h2>OCT</h2>
                                <h2>03</h2>
                            </div>

                            <div className="deposit__middle">
                                <p>${item?.amount}</p>
                                <p>{item?.paymentMethod}</p>
                                <p>{item?.to} {!item?.approved ? (
                                    "(Failed)"
                                ) : "(Success)"} </p>
                            </div>

                            <div className="deposit__con">
                                <p style={{ fontWeight: "bold" }}>{item.from}</p>
                            </div>

                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Withdrawals
