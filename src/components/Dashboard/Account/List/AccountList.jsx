import React from 'react'
import { FiLogOut } from "react-icons/fi"
import { AiOutlineMail } from "react-icons/ai"
import { AiFillLock } from "react-icons/ai"
import { AiFillSetting } from "react-icons/ai"
import { MdOutlinePhotoCameraFront } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import './AccountList.scss'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'

const AccountList = () => {

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
        <div className='acct-list'>
            <div className="acc__right">
                <div className="acc__right__icons">

                    <div className="div__right__icon" onClick={() => navigate("/account/profile")}>
                        <div className="icon__logo__div6">
                            <MdOutlinePhotoCameraFront className="icon" />
                        </div>
                        <p>My Profile</p>
                    </div>
                    <div className="div__right__icon" onClick={() => navigate("/account/verify")}>
                        <div className="icon__logo__div7">
                            <AiFillLock className="icon" />
                        </div>
                        <p>Verification</p>
                    </div>
                    <div className="div__right__icon" onClick={() => navigate("/account/address")}>
                        <div className="icon__logo__div8">
                            <AiFillSetting className="icon" />
                        </div>
                        <p>Update Address </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountList