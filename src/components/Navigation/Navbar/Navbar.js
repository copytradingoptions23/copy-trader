import React, { useState } from "react"
import engPng from "../../../assets/home/engPng.png"
import "./Navbar.scss"
import { NavLink } from "react-router-dom"
import { AiOutlineMenu, AiFillHome, AiOutlineUser, AiOutlineMail, AiOutlineCopyrightCircle, AiOutlineUnlock } from "react-icons/ai"
import { BiMoon, BiDoughnutChart, BiBarChartSquare, BiChart, BiFolder } from "react-icons/bi"
import { FaUserPlus, FaUserFriends } from 'react-icons/fa'
import { MdOutlineContentCopy } from 'react-icons/md'

import logo from "../../../assets/logo.png"

const Navbar = () => {
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div >
            <div className="Navbar">
                <div className="left__nav">
                    <AiOutlineMenu onClick={() => setIsOpen(true)} className="navbar__menubar" />
                    <p className="navbar__name">Copy Trade Options</p>
                </div>
                <div className="right__nav">
                    <NavLink className="navbar__links nav-h" to="/contact">
                        Contact Us
                    </NavLink>
                    <NavLink className="navbar__links nav-h" to="/signup">
                        Register
                    </NavLink>
                    <NavLink className="navbar__links nav-h" to="/login">
                        Login
                    </NavLink>
                    <img src={engPng} alt="engSvg" className="navbar__lang" />
                    <BiMoon className="navbar__time" />
                </div>
            </div>
            {isOpen && (

                <div className="sidebar-con" >

                    <nav class="sidebar" >
                        <div className="side-img">
                            <img src={logo} />
                        </div>

                        <ul>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/">
                                <AiFillHome /> Home
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/login">
                                <AiOutlineUser /> Sign In
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/signup">
                                <FaUserPlus />  Sign Up
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/contact">
                                <AiOutlineMail /> Contact Us
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/dogecoin">
                                <AiOutlineCopyrightCircle /> Dogecoin Mining
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/bitcoin">
                                <AiOutlineCopyrightCircle /> Bitcoin Mining
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/about-minting">
                                <AiOutlineCopyrightCircle /> About Mining
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/responsible">
                                <FaUserFriends /> Responsible Trading
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/leverage">
                                <FaUserFriends /> What is Leverage
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/copy-trader">
                                <MdOutlineContentCopy /> Copy Experts Traders
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/options-trading">
                                <BiDoughnutChart /> Options Trading
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/crypto-trader">
                                <AiOutlineCopyrightCircle /> Crypto Trading
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/stock-trade">
                                <BiBarChartSquare /> Stocks Trading
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/forex-trade">
                                <BiChart /> Forex Trading
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/risk">
                                <BiFolder /> General Risk Disclosure
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/terms">
                                <BiFolder /> Terms of Service
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/privacy">
                                <AiOutlineUnlock /> Privacy Policy
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/cookie">
                                <AiOutlineUnlock /> Cookie Policy
                            </NavLink>
                            <NavLink className="sidebar__links" onClick={handleClick} to="/about">
                                <FaUserFriends /> About Us
                            </NavLink>

                        </ul>
                    </nav>
                    <div className="side-overlay" onClick={() => setIsOpen(false)}></div>
                </div>
            )}
        </div>
    )
}

export default Navbar
