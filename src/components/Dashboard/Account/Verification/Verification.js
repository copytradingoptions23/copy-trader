import React from "react"
import image from "../../../../assets/dashboard/camera.png"
import { useNavigate } from "react-router-dom"
import { AiTwotoneMail } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { BsFillHouseDoorFill } from "react-icons/bs"
import "./Verification.scss"
import { useCookies } from "react-cookie"

const Verification = () => {
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['user']);

    return (
        <div className="verification__container">
            <div className="verification__con">
                <div className="images__head">
                    <img src={image} alt="" />
                    <h1>{cookies.userData?.firstName}</h1>
                    <p>VERIFICATIONS</p>
                </div>
                <div className="verification__icons">
                    <div className="verification__icon">
                        <div className="verification__icon__div1">
                            <AiTwotoneMail className="icon" />
                        </div>
                        <div className="verification__text__div">
                            <p>Email Verification</p>
                            <p className="p__status">Completed</p>
                        </div>
                    </div>

                    <div className="verification__icon" onClick={() => navigate("/account/identity/verify")}>
                        <div className="verification__icon__div2">
                            <BsFillPersonFill className="icon" />
                        </div>
                        <div className="verification__text__div">
                            <p>Identity Verification</p>
                            <p className="p__status">Skipped</p>
                        </div>
                    </div>

                    <div className="verification__icon" onClick={() => navigate("/account/address/verify")}>
                        <div className="verification__icon__div3">
                            <BsFillHouseDoorFill className="icon" />
                        </div>
                        <div className="verification__text__div">
                            <p>Address Verification</p>
                            <p className="p__status">Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verification
