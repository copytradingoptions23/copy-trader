import axios from "axios"
import React, { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./Referral.scss"

const Referral = () => {
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['user']);
    const [referralLink, setReferralLink] = useState("")

    const url = 'https://copytradingoptions1.herokuapp.com/api/referral/get-link'

    useEffect(() => {
        const getRefLink = async () => {
            await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            }).then((response) => {
                console.log(response)
                setReferralLink(response.data.link)
            })
        }

        getRefLink()

    })

    useEffect(() => {
        if (cookies.userToken) {
            console.log("authorized")
        } else {
            navigate('/login')
        }
    }, [cookies])



    return (
        <div className="referral__con">
            <p>MY REFFERALS</p>
            <div className="referral__card1">
                <p>Referrals</p>
                <div className="card1__info">
                    <p className="card1__link">
                        {referralLink && (referralLink)}
                    </p>
                    <hr />
                    <p>Your Referral Link</p>
                </div>
            </div>
            <div className="referral__card2">
                <p>No Referrals Yet</p>
            </div>
        </div>
    )
}

export default Referral
