import React from "react"
import "./InsideNav.css"
import { BsMoonFill } from "react-icons/bs"
import engPng from "../../../../assets/home/engPng.png"

const InsideNav = (props) => {
    return (
        <div className="insideNav__container">
            <div className="insideNav__text">
                <h1 className="insideNav__h1">{props.heading}</h1>
            </div>
            <div className="insideNav__icons">
                <BsMoonFill className="insideNav__time" />
                <div className="insideNav__lang__div">
                    <img src={engPng} alt="engSvg" className="insideNav__lang" />
                    <p className="insideNav__lang__p">en</p>
                </div>
            </div>
        </div>
    )
}

export default InsideNav
