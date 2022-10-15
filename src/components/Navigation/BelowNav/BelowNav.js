import React from "react"
import { MdBarChart } from "react-icons/md"
import { GiHouse } from "react-icons/gi"
import { GiMining } from "react-icons/gi"
import { FaPiggyBank } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import "./BelowNav.scss"
import { useNavigate } from "react-router-dom"

const BelowNav = () => {
    const navigate = useNavigate()

    return (
        <div className="belownav__container">
            <div className="belownav__con">
                <div className="belownav__icons">
                    <div className="belownav__icon__div" onClick={() => navigate('/user/trading')}>
                        <MdBarChart className="belownav__icon" />
                        <p>Trading</p>
                    </div>
                    <div className="belownav__icon__div" onClick={() => navigate('/user/market')}>
                        <GiHouse className="belownav__icon" />
                        <p>Market</p>
                    </div>
                    <div className="belownav__icon__div" onClick={() => navigate('/user/mining')}>
                        <GiMining className="belownav__icon" />
                        <p>Mining</p>
                    </div>
                    <div className="belownav__icon__div" onClick={() => navigate('/user/deposit')}>
                        <FaPiggyBank className="belownav__icon" />
                        <p>Deposits</p>
                    </div>
                    <div className="belownav__icon__div" onClick={() => navigate('/account')}>
                        <BsFillPersonFill className="belownav__icon" />
                        <p>Account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BelowNav
