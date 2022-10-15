import React from "react"
import "./BuyCrypto.css"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect } from "react"

const BuyCrypto = () => {
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
        <div className="buycrypto__container">
            <div className="buycrypto__text">
                <h1 className="buycrypto__h1">BUY CRYPTO</h1>
                <p className="buycrypto__p">
                    buy bitcoin, ethereum, and other crypto currencies for account funding from
                    third parties
                </p>
            </div>
            <div className="buycrypto__plans">
                <a href="https://bitso.com/" target="_blank" className="buycrypto__properties">
                    <p className="buycrypto__plan__p">Bitso</p>
                </a>
                <a href="https://paxful.com/" target="_blank" className="buycrypto__properties">
                    <p className="buycrypto__plan__p">Paxful</p>
                </a>

                <a href="https://coinbase.com/" target="_blank" className="buycrypto__properties">
                    <p className="buycrypto__plan__p">Coinbase</p>
                </a>

                <a href="https://moonpay.com/" target="_blank" className="buycrypto__properties">
                    <p className="buycrypto__plan__p">Moon Pay</p>
                </a>

                <a href="https://bitcoin.co.uk/" target="_blank" className="buycrypto__properties">
                    <p className="buycrypto__plan__p">Bitcoin.UK</p>
                </a>
            </div>
        </div>
    )
}

export default BuyCrypto
