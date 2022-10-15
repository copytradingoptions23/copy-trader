import React from "react"
import "../styles/Account.scss"
import image from "../../assets/dashboard/camera.png"
import { HiUserGroup } from "react-icons/hi"
import { AiTwotoneStar } from "react-icons/ai"
import { BiMoney } from "react-icons/bi"
import { FiLogOut } from "react-icons/fi"
import { AiOutlineMail } from "react-icons/ai"
import { AiFillLock } from "react-icons/ai"
import { AiFillSetting } from "react-icons/ai"
import { MdOutlinePhotoCameraFront } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import InsideNav from "../../components/Dashboard/Deposit/InsideNav/InsideNav"
import { useCookies } from "react-cookie"
import { useEffect } from "react"

const Accounts = () => {
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['user']);

    const logOut = () => {
        setCookie('userToken', "", { path: '/' });
        setCookie('userData', "", { path: '/' });

        window.location.href = '/'
    }

    useEffect(() => {
        if (cookies.userToken) {
            console.log("authorized")
        } else {
            navigate('/login')
        }
    }, [cookies])

    useEffect(() => {
        if (cookies.userData.role == "admin") {
            navigate('/login')
        }
    }, [cookies])

    return (
        <>
            <InsideNav heading="Account" />
            <div className="acc__container">
                <div className="acc__left">
                    <div className="acc__head">
                        <img src={image} alt="" />
                        <h1>{cookies.userData.firstName}</h1>
                        <p>{cookies.userData.email}</p>
                    </div>
                    <div className="acc__left__icons">
                        <div className="div__left__icon" onClick={() => navigate("/referral")}>
                            <div className="icon__logo__div1">
                                <HiUserGroup className="icon" />
                            </div>
                            <p>Referrals</p>
                        </div>

                        <div className="div__left__icon" onClick={() => navigate("/watchList")}>
                            <div className="icon__logo__div2">
                                <AiTwotoneStar className="icon" />
                            </div>
                            <p>Watch List</p>
                        </div>

                        <div className="div__left__icon" onClick={() => navigate("/withdrawal")}>
                            <div className="icon__logo__div3">
                                <BiMoney className="icon" />
                            </div>
                            <p>Withdrawals</p>
                        </div>
                    </div>
                </div>
                <div className="acc__right">
                    <div className="acc__right__icons">
                        <div className="div__right__icon" onClick={() => navigate("/")}>
                            <div className="icon__logo__div4">
                                <FiLogOut className="icon" />
                            </div>
                            <p onClick={logOut}>Logout</p>
                        </div>
                        <div className="div__right__icon" onClick={() => navigate("/account/email")}>
                            <div className="icon__logo__div5">
                                <AiOutlineMail className="icon" />
                            </div>
                            <p>Update Email</p>
                        </div>
                        <div className="div__right__icon" onClick={() => navigate("/account")}>
                            <div className="icon__logo__div6">
                                <MdOutlinePhotoCameraFront className="icon" />
                            </div>
                            <p>Update Photo</p>
                        </div>
                        <div className="div__right__icon" onClick={() => navigate("/account/password")}>
                            <div className="icon__logo__div7">
                                <AiFillLock className="icon" />
                            </div>
                            <p>Update Password</p>
                        </div>
                        <div className="div__right__icon" onClick={() => navigate("/account/settings")}>
                            <div className="icon__logo__div8">
                                <AiFillSetting className="icon" />
                            </div>
                            <p>Account Settings</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accounts
