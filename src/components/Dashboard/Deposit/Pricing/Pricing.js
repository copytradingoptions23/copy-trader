import React from "react"
import "./Pricing.css"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect } from "react"

const Pricing = () => {
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
        <div className="pricing__container">
            <div className="pricing__text">
                <p className="pricing__p">Pricing</p>
            </div>
            <div className="pricing__plans">
                <div className="pricing__trading" onClick={() => navigate("trading")}>
                    <p className="pricing__plan__p">Trading Plans</p>
                </div>
                <div className="pricing__mining">
                    <p className="pricing__plan__p" onClick={() => navigate("mining")}>
                        Mining Plans
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pricing
