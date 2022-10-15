import React, { useState } from "react"
import "./CryptoPage.css"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect } from "react"
import axios from "axios"
import MoonLoader from 'react-spinners/MoonLoader'

const CryptoPage = () => {
    const navigate = useNavigate()
    const [amountUSD, setAmountUSD] = useState(0)
    const [paymentState, setPaymentState] = useState("LTC Litecoin")
    const [toState, setToState] = useState("Trading")

    const [cookies, setCookie] = useCookies(['user']);
    const [msg, setMsg] = useState("")
    const [loader, setLoader] = useState(false)


    const url = 'https://copytradingoptions1.herokuapp.com/api/deposits'

    const handlePay = async (e) => {
        e.preventDefault()
        if (amountUSD <= 5000) {
            setMsg("Enter An Amount above 5000")
            return
        }

        setLoader(true)

        await axios.post(url, {
            amount: amountUSD,
            paymentMethod: paymentState,
            to: toState
        }, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then(function (response) {
                console.log(response)
                setLoader(false)
                // setCookie('userData', response.data.user, { path: '/' })
                if (response.data.message == "DEPOSIT MADE") {
                    setMsg("Deposit Made")
                    window.location.href = '/user/deposit/pay'
                    navigate('/user/deposit/pay', { state: { type: paymentState } })
                } else {
                    setMsg("Error Occured")
                }

            })
            .catch((err) => {
                setLoader(false)
                setMsg("Server Error")
            })
    }

    useEffect(() => {
        if (cookies.userToken) {
            console.log("authorized")
        } else {
            navigate('/login')
        }
    }, [cookies])


    const renderPaymentState = () => {
        let state

        if (paymentState == "usdt") {
            state = "usdt"
        } else if (paymentState == "btc") {
            state = "btc"
        } else if (paymentState == "eth") {
            state = "eth"
        } else {
            state = "ltc"
        }

        return state
    }

    const renderToState = () => {
        let state

        if (toState == "bitcoin") {
            state = "bitcoin"
        } else if (toState == "ethereum") {
            state = "ethereum"
        } else if (toState == "doge") {
            state = "doge"
        } else if (toState == "binance") {
            state = "binance"
        } else {
            state = "trading"
        }

        return state
    }



    return (
        <div className="cryptopage__container">
            <div className="cryptopage__text">
                <p className="cryptopage__p1">FUND YOUR ACCOUNT</p>
                <p className="cryptopage__p2" onClick={() => navigate("/user/deposit/pricing")}>
                    VIEW PRICING
                </p>
                <p className="cryptopage__p3" onClick={() => navigate("/user/deposit/buyCrypto")}>
                    BUY CRYPTO NOW
                </p>
            </div>
            <div className="cryptopage__box">
                <div className="cryptopage__price__div">
                    {renderPaymentState() == "btc" ? (
                        <p className="cryptopage__price">{parseInt(amountUSD) / 19132}</p>
                    ) : (
                        ""
                    )}
                    {renderPaymentState() == "eth" ? (
                        <p className="cryptopage__price">{parseInt(amountUSD) / 1290.85}</p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="cryptopage__usd">
                    <p className="cryptopage__usd__smallp">Amount</p>

                    <div className="cryptopage__usd__input">
                        <p className="cryptopage__usd__p">USD</p>
                        <input
                            type="number"
                            placeholder=""
                            value={amountUSD}
                            onChange={(e) => setAmountUSD(e.target.value)}
                            required
                            className="usd__input"
                        />
                    </div>
                </div>
                <div className="cryptopage__payment">
                    <p className="cryptopage__payment__smallp">Payment</p>

                    <div className="selector__div">
                        <select
                            onChange={(e) => setPaymentState(e.target.value)}
                            value={paymentState}
                            className="selector"
                        >
                            <option value="LTC Litecoin" selected>
                                LTC Litecoin
                            </option>
                            <option value="USDT Tether ERC20">USDT Tether ERC20</option>
                            <option value="BTC Bitcoin">BTC Bitcoin</option>
                            <option value="ETH Ethereum">ETH Ethereum</option>
                        </select>
                    </div>
                </div>

                <div className="cryptopage__to">
                    <p className="cryptopage__to__smallp">To</p>

                    <div className="selector__div">
                        <select onChange={(e) => setToState(e.target.value)} value={toState} className="selector">
                            <option value="" selected>
                                Select
                            </option>
                            <option value="Trading" selected>
                                Trading
                            </option>
                            <option value="Bitcoin Mining">Bitcoin Mining</option>
                            <option value="Ethereum Mining">Ethereum Mining</option>
                            <option value="Dogecoin Mining">Dogecoin Mining</option>
                            <option value="Binance Coin Mining">Binance Coin Mining</option>
                        </select>
                    </div>
                </div>

                <p style={{ width: "100%", textAlign: "center", margin: "20px 0", color: "#313bac" }}>{msg}</p>

                {loader ? (
                    <div className='log-spin'>
                        <MoonLoader color="red" />
                    </div>
                ) : (
                    <div className="cryptopage__proceed" onClick={handlePay}>
                        <p className="cryptopage__button" >Proceed</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CryptoPage
