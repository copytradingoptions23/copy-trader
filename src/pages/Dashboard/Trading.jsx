import React, { useEffect } from 'react'
import '../styles/Trading.scss'
import { BsHourglassBottom } from 'react-icons/bs'
import InsideNav from '../../components/Dashboard/Deposit/InsideNav/InsideNav'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

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
        <>
            <InsideNav heading="Trading" />
            <div className="trade__user">
                <div className='trade__con'>
                    <div className="trade__left">
                        <div className="trade__card">
                            <div className="trade__card__col">
                                <div className="trade__card__col1">
                                    <h2>$0.00</h2>
                                    <p>BALANCE</p>
                                </div>
                                <div className="trade__card__col2">
                                    <h2>$0.00</h2>
                                    <p>DEPOSIT</p>
                                </div>
                            </div>

                            <div className="trade__signal"></div>
                            <div className="signal__text">
                                <p>SIGNAL STRENGTH</p>
                            </div>
                        </div>
                        <div className="tr__block">
                            <div>
                                <p style={{ cursor: "pointer" }}>ADD FUNDS</p>
                            </div>
                            <div>
                                <p style={{ cursor: "pointer" }} onClick={() => navigate('/user/traders')}>MY TRADERS</p>
                            </div>
                        </div>
                        {/* crypto currency  */}
                        <br />
                        {/*  TradingView Widget BEGIN  */}

                        <coingecko-coin-ticker-widget coin-id="bitcoin" currency="usd" locale="en" background-color="#f5f7fe"></coingecko-coin-ticker-widget>
                        <br />
                        <coingecko-coin-ticker-widget coin-id="ethereum" currency="usd" locale="en" background-color="#f5f7fe"></coingecko-coin-ticker-widget>
                        {/* crypto end */}
                    </div>
                    <div className="trade__right">
                        <div className="tr__lblock">
                            <div className='tr__mtab'>
                                <BsHourglassBottom />
                                <p>Closed</p>
                            </div>
                            <div className='tr__mtab'>
                                <BsHourglassBottom />
                                <p>Open</p>
                            </div>
                        </div>
                        <div className="tr__tab">
                            <div className="tr__open">
                                <p>NO OPENED TRADES</p>
                            </div>
                        </div>
                        <div className="tr__tab">
                            <div className="tr__close">
                                <p>NO CLOSED TRADES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trading