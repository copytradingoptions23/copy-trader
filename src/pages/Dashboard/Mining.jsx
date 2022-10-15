import React from 'react'
import { useNavigate } from 'react-router-dom'
import InsideNav from '../../components/Dashboard/Deposit/InsideNav/InsideNav'
import List from '../../components/Dashboard/Market/List'
import '../styles/Mining.scss'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'

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
        <>
            <InsideNav heading="Mining" />
            <div className="mint__user">
                <div className='mint__con'>
                    <div className="mint__left">
                        <div className="mint__card">
                            <div className="mint__card__col">
                                <div className="mint__card__col1">
                                    <h2>$0.00</h2>
                                </div>
                            </div>

                        </div>
                        <div className="mi__block">
                            <div style={{ cursor: "pointer" }} onClick={() => navigate('/user/deposit')}>
                                <p>ADD FUNDS</p>
                            </div>
                            <div style={{ cursor: "pointer" }} onClick={() => navigate('/contract/select')}>
                                <p>MY CONTRACT</p>

                            </div>


                        </div>

                        <br />
                        {/*  TradingView Widget BEGIN  */}

                        <coingecko-coin-ticker-widget coin-id="bitcoin" currency="usd" locale="en" background-color="#f5f7fe"></coingecko-coin-ticker-widget>
                        <br />
                        <coingecko-coin-ticker-widget coin-id="ethereum" currency="usd" locale="en" background-color="#f5f7fe"></coingecko-coin-ticker-widget>
                        {/* crypto end */}

                    </div>
                    <div className="mint__right">
                        <div className='list__con'>
                            <div className="left__list">
                                <div className="mi__img">
                                    <img src="https://protradeoptions.live/assets/images/icons/pair-icon-btcusd.img.svg" alt="" />
                                </div>
                                <div className="list__name">
                                    <p>0.000000 BTC</p>
                                    <p style={{ color: "gray" }}>$0.00</p>
                                </div>
                            </div>
                            <div className="right__list">
                                <p>GH/s</p>
                            </div>
                        </div>
                        <div className='list__con'>
                            <div className="left__list">
                                <div className="mi__img">
                                    <img src="https://protradeoptions.live/assets/images/icons/pair-icon-ethusd.img.svg" alt="" />
                                </div>
                                <div className="list__name">
                                    <p>0.000000 BTC</p>
                                    <p style={{ color: "gray" }}>$0.00</p>
                                </div>
                            </div>
                            <div className="right__list">
                                <p>GH/s</p>
                            </div>
                        </div>
                        <div className='list__con'>
                            <div className="left__list">
                                <div className="mi__img">
                                    <img src="https://protradeoptions.live/assets/images/icons/pair-icon-bnbusd.img.svg" alt="" />
                                </div>
                                <div className="list__name">
                                    <p>0.000000 BTC</p>
                                    <p style={{ color: "gray" }}>$0.00</p>
                                </div>
                            </div>
                            <div className="right__list">
                                <p>GH/s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mining