import React, { useState } from "react"
import "./WithdrawalForm.scss"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect } from "react"
import axios from "axios"

const WithdrawalForm = (props) => {
    const navigate = useNavigate()

    const url = 'https://copytradingoptions1.herokuapp.com/api/withdraw/crypto'
    const url2 = 'https://copytradingoptions1.herokuapp.com/api/withdraw/bank'
    const url3 = 'https://copytradingoptions1.herokuapp.com/api/withdraw/cash-app'
    const url4 = 'https://copytradingoptions1.herokuapp.com/api/withdraw/paypal'

    const [cookies, setCookie] = useCookies(['user']);
    const [msg, setMsg] = useState("")
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        if (cookies.userToken) {
            console.log("authorized")
        } else {
            navigate('/login')
        }
    }, [cookies])


    const makeWithdraw = async (e) => {
        e.preventDefault()

        if (props.titleName == "Crypto") {
            await axios.post(url, {
                from: fromState,
                withdrawalCode: inputCode,
                cryptoCurrency: cryptoState,
                wallet: inputDynamic,
                amount: inputAmount

            }, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setLoader(false)
                    // setCookie('userData', response.data.user, { path: '/' })

                    window.location.href = '/withdrawal'
                })
                .catch((err) => {
                    setLoader(false)
                    setMsg("Server Error")
                })
        }

        if (props.titleName == "Bank") {
            await axios.post(url2, {
                from: fromState,
                withdrawalCode: inputCode,
                bankName: inputDynamic,
                accountNumber: bankAccount,
                amount: inputAmount

            }, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setLoader(false)
                    // setCookie('userData', response.data.user, { path: '/' })

                    window.location.href = '/withdrawal'
                })
                .catch((err) => {
                    setLoader(false)
                    setMsg("Server Error")
                })
        }

        if (props.titleName == "Cash App") {
            await axios.post(url3, {
                from: fromState,
                withdrawalCode: inputCode,
                cashTag: inputDynamic,
                amount: inputAmount

            }, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setLoader(false)
                    // setCookie('userData', response.data.user, { path: '/' })

                    window.location.href = '/withdrawal'
                })
                .catch((err) => {
                    setLoader(false)
                    setMsg("Server Error")
                })
        }

        if (props.titleName == "PayPal") {
            await axios.post(url4, {
                from: fromState,
                withdrawalCode: inputCode,
                paypalEmail: inputDynamic,
                amount: inputAmount

            }, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setLoader(false)
                    // setCookie('userData', response.data.user, { path: '/' })

                    window.location.href = '/withdrawal'
                })
                .catch((err) => {
                    setLoader(false)
                    setMsg("Server Error")
                })
        }



    }


    // state start
    const [inputCode, setInputCode] = useState("")
    const [inputAddress, setInputAddress] = useState("")
    const [inputAmount, setInputAmount] = useState("")
    const [inputDynamic, setInputDynamic] = useState("")
    const [bankAccount, setBankAccount] = useState("")

    console.log("input Code", inputCode)
    console.log("inputAddress", inputAddress)
    console.log("input Amont", inputAmount)
    console.log("input dynamic", inputDynamic)
    console.log("bank account", bankAccount)

    const [fromState, setFromState] = useState("Trading")
    const [cryptoState, setCryptoState] = useState("Bitcoin")

    const onInputCode = (event) => {
        const { value } = event.target
        setInputCode(value)
    }
    const onInputAddress = (event) => {
        const { value } = event.target
        setInputAddress(value)
    }
    const onInputAmount = (event) => {
        const { value } = event.target
        setInputAmount(value)
    }
    const onInputDynamic = (event) => {
        const { value } = event.target
        setInputDynamic(value)
    }
    const handleFromState = (e) => {
        setFromState(e.target.value)
    }
    const handleCryptoState = (e) => {
        setCryptoState(e.target.value)
    }

    // state end

    const renderFromState = () => {
        let state

        if (fromState == "atom") {
            state = "atom"
        } else if (fromState == "btc") {
            state = "btc"
        } else if (fromState == "eth") {
            state = "eth"
        } else if (fromState == "doge") {
            state = "doge"
        } else if (fromState == "bnb") {
            state = "bnb"
        } else {
            state = "trading"
        }

        return state
    }

    const renderCryptoState = () => {
        let state

        if (cryptoState == "tether") {
            state = "tether"
        } else if (cryptoState == "ethereum") {
            state = "ethereum"
        } else {
            state = "bitcoin"
        }

        return state
    }

    return (
        <div className="wf__container">
            <div className="wf__text">
                <p className="wf__p1">{`Withdraw to ${props.titleName}`}</p>
            </div>
            <div className="wf__box">
                {props.state == "bank" ? (
                    <p>For bank withdrawals we may contact you for additional information.</p>
                ) : null}

                <div className="wf__from">
                    <p className="wf__from__smallp">From</p>

                    <div className="selector__div">
                        <select onChange={handleFromState} value={fromState} className="selector">
                            <option value="Trading" selected>
                                Trading ($0.00)
                            </option>
                            <option value="">Select</option>
                            <option value="Bitcoin Mining">Bitcoin Mining (0 BTC)</option>
                            <option value="Ethereum Mining">Ethereum Mining (0 ETH)</option>
                            <option value="Cosmos Mining">Cosmos Mining (0 ATOM)</option>
                            <option value="Dogecoin Mining">Dogecoin Mining (0 DOGE)</option>
                            <option value="Binance Coin Mining">Binance Coin Mining (0 BNB)</option>
                        </select>
                    </div>
                </div>

                {props.state == "crypto" ? (
                    <div className="wf__crypto">
                        <p className="wf__crypto__smallp">Crypto Currency</p>

                        <div className="selector__div">
                            <select
                                onChange={handleCryptoState}
                                value={cryptoState}
                                className="selector"
                            >
                                <option value="Bitcoin" selected>
                                    Bitcoin BTC
                                </option>
                                <option value="Tether">Tether USDT</option>
                                <option value="Ethereum">Ethereum ETH</option>
                            </select>
                        </div>
                    </div>
                ) : null}

                <div className="wf__code">
                    <p className="wf__code__smallp">Withdrawal Code</p>
                    <div className="wf__code__input">
                        <input
                            type="text"
                            placeholder=""
                            value={inputCode}
                            onChange={onInputCode}
                            className="code__input"
                        />
                    </div>
                </div>



                {props.state == "bank" ? (

                    <div className="wf__address">
                        <p className="wf__address__smallp">Bank Account Number</p>
                        <div className="wf__address__input">
                            <input
                                type="text"
                                placeholder=""
                                value={bankAccount}
                                onChange={(e) => setBankAccount(e.target.value)}
                                className="address__input"
                            />
                        </div>
                    </div>

                ) : null}



                <div className="wf__address">
                    <p className="wf__address__smallp">{props.inputName}</p>
                    <div className="wf__address__input">
                        <input
                            type="text"
                            placeholder=""
                            value={inputDynamic}
                            onChange={onInputDynamic}
                            className="address__input"
                        />
                    </div>
                </div>

                <div className="wf__amount">
                    <p className="wf__amount__smallp">Amount</p>

                    <div className="wf__amount__input">
                        <p className="wf__amount__p">USD</p>
                        <input
                            type="number"
                            placeholder=""
                            value={inputAmount}
                            onChange={onInputAmount}
                            className="amount__input"
                        />
                    </div>
                </div>

                <div className="wf__proceed" onClick={makeWithdraw}>
                    <p className="wf__button">Submit</p>
                </div>
            </div>
        </div>
    )
}

export default WithdrawalForm
