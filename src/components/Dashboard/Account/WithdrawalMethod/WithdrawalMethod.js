import React from "react"
import "./WithdrawalMethod.scss"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect } from "react"

const WithdrawalMethod = () => {
    const navigate = useNavigate()

    const [cookies, setCookie] = useCookies(['user']);

    useEffect(() => {
        if (cookies.userToken) {
            console.log("authorized")
        } else {
            navigate('/login')
        }
    }, [cookies])

    return (
        <div className="wm__con">
            <p>SELECT WITHDRAWAL METHOD</p>
            <div className="wm__cards">
                <div
                    className="wm__card"
                    onClick={() => navigate("/withdrawal/withdrawalMethod/bankForm")}
                >
                    <p>Bank</p>
                </div>
                <div
                    className="wm__card"
                    onClick={() => navigate("/withdrawal/withdrawalMethod/cryptoForm")}
                >
                    <p>Crypto</p>
                </div>
                <div
                    className="wm__card"
                    onClick={() => navigate("/withdrawal/withdrawalMethod/payPalForm")}
                >
                    <p>PayPal</p>
                </div>
                <div
                    className="wm__card"
                    onClick={() => navigate("/withdrawal/withdrawalMethod/cashAppForm")}
                >
                    <p>CashApp</p>
                </div>
            </div>
        </div>
    )
}

export default WithdrawalMethod
