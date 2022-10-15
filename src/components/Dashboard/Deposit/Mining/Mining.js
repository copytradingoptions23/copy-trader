import React from "react"
import "./Mining.css"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect } from "react"

const Mining = () => {
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
        <div className="mining__container">
            <div className="mining__text">
                <h1 className="mining__h1">Mining Plans</h1>
            </div>
            <div className="mining__cards">
                <div className="mining__card">
                    <div className="mining__heading">
                        <p className="mining__heading__p">4 Weeks Contract</p>
                        <h1 className="mining__heading__h1">$55000</h1>
                    </div>

                    <div className="mining__body">
                        <p className="mining__body__p">Min Deposit $55000</p>
                        <p className="mining__body__p">Max Deposit $999999</p>
                        <p className="mining__body__p">Referral Bonus</p>
                        <p className="mining__body__p">Full IT Support</p>
                    </div>

                    <div className="mining__button" onClick={() => navigate("/cryptoPage")}>
                        <p className="mining__button__p">PURCHASE PLAN</p>
                    </div>
                </div>

                <div className="mining__card">
                    <div className="mining__heading">
                        <p className="mining__heading__p">3 Weeks Contract</p>
                        <h1 className="mining__heading__h1">$25000</h1>
                    </div>

                    <div className="mining__body">
                        <p className="mining__body__p">Min Deposit $25000</p>
                        <p className="mining__body__p">Max Deposit $54999</p>
                        <p className="mining__body__p">Referral Bonus</p>
                        <p className="mining__body__p">Full IT Support</p>
                    </div>

                    <div className="mining__button" onClick={() => navigate("/cryptoPage")}>
                        <p className="mining__button__p">PURCHASE PLAN</p>
                    </div>
                </div>

                <div className="mining__card">
                    <div className="mining__heading">
                        <p className="mining__heading__p">2 Weeks Contract</p>
                        <h1 className="mining__heading__h1">$10000</h1>
                    </div>

                    <div className="mining__body">
                        <p className="mining__body__p">Min Deposit $10000</p>
                        <p className="mining__body__p">Max Deposit $24999</p>
                        <p className="mining__body__p">Referral Bonus</p>
                        <p className="mining__body__p">Full IT Support</p>
                    </div>

                    <div className="mining__button" onClick={() => navigate("/cryptoPage")}>
                        <p className="mining__button__p">PURCHASE PLAN</p>
                    </div>
                </div>

                <div className="mining__card">
                    <div className="mining__heading">
                        <p className="mining__heading__p">1 Week Contract</p>
                        <h1 className="mining__heading__h1">$1000</h1>
                    </div>

                    <div className="mining__body">
                        <p className="mining__body__p">Min Deposit $1000</p>
                        <p className="mining__body__p">Max Deposit $10000</p>
                        <p className="mining__body__p">Referral Bonus</p>
                        <p className="mining__body__p">Full IT Support</p>
                    </div>

                    <div className="mining__button" onClick={() => navigate("/cryptoPage")}>
                        <p className="mining__button__p">PURCHASE PLAN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mining
