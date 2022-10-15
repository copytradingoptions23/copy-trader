import React from 'react'
import { useNavigate } from 'react-router-dom'
import InsideNav from '../../components/Dashboard/Deposit/InsideNav/InsideNav'
import List from '../../components/Dashboard/Market/List'
import '../styles/Market.scss'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'

const Market = () => {
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
            <InsideNav heading="Markets" />
            <div className='market'>
                <div className="mkt__con">
                    <div className="mkt__select">
                        <select name="crypto" id="">
                            <option value="crypto">Crypto</option>
                            <option value="currency">Currency</option>
                            <option value="stock">Stocks </option>
                            <option value="indice">Indices</option>
                        </select>
                    </div>
                    <div className="mkt__err">
                        <p>Stock, Forex and Index Markets are usually closed during weekends; No price movement.</p>
                        <p>X</p>
                    </div>
                    <div className="mkt__list-d">
                        <coingecko-coin-list-widget width="700" coin-ids="bitcoin,ethereum,eos,ripple,litecoin,ripple,aave,binancecoin,dogecoin,solana" currency="usd" locale="en"></coingecko-coin-list-widget>
                    </div>
                    <div className="mkt__list-m">
                        <coingecko-coin-list-widget width="100" coin-ids="bitcoin,ethereum,eos,ripple,litecoin,ripple,aave,binancecoin,dogecoin,solana" currency="usd" locale="en"></coingecko-coin-list-widget>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Market