import React from "react"
import "./Trading.css"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect } from "react"

const Trading = () => {
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
        <div className="trading__container">
            <div className="trading__text">
                <h1 className="trading__h1">Trading Plans</h1>
            </div>
            <div className="trading__cards">
                <div className="trading__card">
                    <div className="trading__heading">
                        <p className="trading__heading__p">PREMIUM PACKAGE</p>
                        <h1 className="trading__heading__h1">$50000</h1>
                    </div>

                    <div className="trading__body">
                        <p className="trading__body__p">Min Deposit $50000</p>
                        <p className="trading__body__p">Max Deposit $999999</p>
                        <p className="trading__body__p">Referral Bonus</p>
                        <p className="trading__body__p">Full IT Support</p>
                    </div>

                    <div className="trading__button" onClick={() => navigate("/cryptoPage")}>
                        <p className="trading__button__p">PURCHASE PLAN</p>
                    </div>
                </div>

                <div className="trading__card">
                    <div className="trading__heading">
                        <p className="trading__heading__p">GOLD PACKAGE</p>
                        <h1 className="trading__heading__h1">$20000</h1>
                    </div>

                    <div className="trading__body">
                        <p className="trading__body__p">Min Deposit $20000</p>
                        <p className="trading__body__p">Max Deposit $50000</p>
                        <p className="trading__body__p">Referral Bonus</p>
                        <p className="trading__body__p">Full IT Support</p>
                    </div>

                    <div className="trading__button" onClick={() => navigate("/cryptoPage")}>
                        <p className="trading__button__p">PURCHASE PLAN</p>
                    </div>
                </div>

                <div className="trading__card">
                    <div className="trading__heading">
                        <p className="trading__heading__p">SILVER PACKAGE</p>
                        <h1 className="trading__heading__h1">$10000</h1>
                    </div>

                    <div className="trading__body">
                        <p className="trading__body__p">Min Deposit $10000</p>
                        <p className="trading__body__p">Max Deposit $20000</p>
                        <p className="trading__body__p">Referral Bonus</p>
                        <p className="trading__body__p">Full IT Support</p>
                    </div>

                    <div className="trading__button" onClick={() => navigate("/cryptoPage")}>
                        <p className="trading__button__p">PURCHASE PLAN</p>
                    </div>
                </div>

                <div className="trading__card">
                    <div className="trading__heading">
                        <p className="trading__heading__p">BRONZE PACKAGE</p>
                        <h1 className="trading__heading__h1">$1000</h1>
                    </div>

                    <div className="trading__body">
                        <p className="trading__body__p">Min Deposit $1000</p>
                        <p className="trading__body__p">Max Deposit $10000</p>
                        <p className="trading__body__p">Referral Bonus</p>
                        <p className="trading__body__p">Full IT Support</p>
                    </div>

                    <div className="trading__button" onClick={() => navigate("/cryptoPage")}>
                        <p className="trading__button__p">PURCHASE PLAN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trading
