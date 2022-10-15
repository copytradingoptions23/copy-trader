import React from 'react'
import './Pay.scss'
import { MdContentCopy } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

const Pay = () => {
    const { state } = useLocation();
    const { type } = state;

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
        <div className="pay__con">
            <div className="pay__card">
                <p>SEND $345,678.00 WORTH OF LITECOIN LTC</p>
                <p>TO THE WALLET ADDRESS BELOW OR SCAN THE QR CODE WITH YOUR WALLET APP</p>
                <div className="pay__copy">
                    <MdContentCopy className='copy' />
                    <p>LSLShB99GCHDn4nQ8objFdVonkSGfLUPWT</p>
                </div>
                <div className="pay__qrcode">
                    <img src="https://chart.googleapis.com/chart?cht=qr&chl=LSLShB99GCHDn4nQ8objFdVonkSGfLUPWT&chs=160x160&chld=L|0" alt="" />
                </div>
                <div className="pay__timer">
                    <p>54:22</p>
                    <p>Awaiting Payment</p>
                </div>
                <div className="pay__upload">
                    <p>UPLOAD PAYMENT PROOF</p>
                </div>
                <div className="pay__confirm">
                    <p>WAIT FOR CONFIRMATION</p>
                </div>
            </div>
        </div>
    )
}

export default Pay