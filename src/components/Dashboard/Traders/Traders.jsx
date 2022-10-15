import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Traders.scss'
import { useCookies } from 'react-cookie'

const Traders = () => {
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
        <div className='trader-con'>
            <div className="trader-search">
                <input type="text" placeholder='Search' />
            </div>
            <div className="trader-card-con">
                <div className="trader-card">
                    <div className="trader-img">
                        <img src="https://protradeoptions.live/uploads/images/1664319566CE58F48A-7F6C-404A-B09D-586541DFE14D.jpeg" alt="" />
                    </div>
                    <div className="trader-text">
                        <h3> Hasan</h3>
                        <p>16877 Wins</p>
                        <p>301 Losses</p>
                        <p>98% Win Rate</p>
                        <p>20% Profit Share</p>
                    </div>
                    <div className="trade-btn">
                        <button style={{ cursor: "pointer" }}>
                            Copy
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Traders