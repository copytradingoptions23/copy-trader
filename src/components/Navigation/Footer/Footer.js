import React from 'react'
import './Footer.css'
import { IoLogoTwitter } from 'react-icons/io'
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'


const Footer = () => {
    const navigate = useNavigate()
    return (


        <div className='footer'>
            <footer>
                <div className="footer__container">
                    <div className="footer__row">
                        <div className=" main-foot">
                            <img src={logo} alt="" />
                            <h2 style={{ color: "white" }}>Copytradeoptions</h2>
                            <h4> <AiOutlineMail style={{ fontSize: 18 }} /> info@copytradeoptions.live</h4>
                        </div>

                        <div className='foot-second'>
                            <div className="footer__col">
                                <h4 style={{ fontWeight: "bold" }}>Top Instrument</h4>
                                <ul>
                                    <li onClick={() => navigate('/')}>Apple</li>
                                    <li onClick={() => navigate('/')}>Shiba</li>
                                    <li onClick={() => navigate('/')}>Bitcoin</li>
                                    <li onClick={() => navigate('/')}>Ethereum</li>

                                </ul>
                            </div>

                            <div className="footer__col">
                                <h4 style={{ fontWeight: "bold" }}>Learn More</h4>
                                <ul>
                                    <li onClick={() => navigate('about')}>About Us</li>
                                    <li onClick={() => navigate('leverage')}>What is Leverage</li>
                                    <li onClick={() => navigate('responsible')}>Responsible Trading</li>
                                    <li onClick={() => navigate('crypto-trader')}>How Copy Trading Works</li>

                                </ul>
                            </div>

                            <div className="footer__col">
                                <h4 style={{ fontWeight: "bold" }}>Privacy</h4>
                                <ul>

                                    <li onClick={() => navigate('cookie')}>Cookie Policy</li>
                                    <li onClick={() => navigate('privacy')}>Privacy Policy</li>
                                    <li onClick={() => navigate('terms')}>Terms & Conditions</li>
                                    <li onClick={() => navigate('risk')}>General Risk Disclosure</li>

                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer