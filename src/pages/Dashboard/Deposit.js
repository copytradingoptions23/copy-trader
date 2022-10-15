import React from "react"
import InsideNav from "../../components/Dashboard/Deposit/InsideNav/InsideNav"
import "../styles/Deposit.scss"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const Deposit = () => {
    const navigate = useNavigate()
    const [deposit, setDeposit] = useState(null)

    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/deposits'


    useEffect(() => {
        if (cookies.userToken) {
            console.log("authorized")
        } else {
            navigate('/login')
        }
    }, [cookies])

    useEffect(() => {
        const getDeposit = async () => {
            await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setDeposit(response.data.deposits)

                })
                .catch((err) => {
                    setDeposit(null)
                })
        }

        getDeposit()

        console.log(deposit)
    }, [])


    return (
        <>
            <InsideNav heading="Deposit" />
            <div className="deposit__container">
                <div className="deposit__button__div">
                    <button onClick={() => navigate("cryptoPage")} className="deposit__button">
                        NEW DEPOSIT
                    </button>
                </div>

                {!deposit && (
                    <div className="deposit__content__div">
                        <p className="deposit__no__p">NO DEPOSIT YET</p>
                    </div>

                )}


                {
                    deposit?.map((item) => (
                        <div className="deposit__content__div-on">
                            <div className="deposit__con">
                                <h2>OCT</h2>
                                <h2>03</h2>
                            </div>

                            <div className="deposit__middle">
                                <p>${item?.amount}</p>
                                <p>{item?.paymentMethod}</p>
                                <p>{item?.to} {!item?.confirmed && (
                                    "(Failed)"
                                )} </p>
                            </div>

                            <div className="deposit__con">
                                <p style={{ fontWeight: "bold" }}>Pay</p>
                            </div>

                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Deposit
