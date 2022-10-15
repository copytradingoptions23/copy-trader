import React from "react"
import "./ContractSelect.scss"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect } from "react"

const ContractSelect = () => {
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
            <p>SELECT PAYMENT METHOD</p>
            <div className="wm__cards">
                <div
                    className="wm__card"
                    onClick={() => navigate("/user/deposit/cryptoPage")}
                >
                    <p>Bitcoin</p>
                </div>
                <div
                    className="wm__card"

                >
                    <p>Zelle</p>
                </div>
                <div
                    className="wm__card"

                >
                    <p>PayPal</p>
                </div>
                <div
                    className="wm__card"

                >
                    <p>Venmo</p>
                </div>
                <div
                    className="wm__card"

                >
                    <p>CashApp</p>
                </div>
            </div>
        </div>
    )
}

export default ContractSelect
