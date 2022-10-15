import React, { useContext } from "react"
import toroLanding from "../../../assets/home/toro-landing.mp4"
import "./Header.css"


const Header = () => {

    return (
        <div className="home-main">
            <div className="home-overlay"></div>
            <div className="home-header__content">
                <div className="home-heroarea">
                    <div className="home-heroarea__info">
                        <div className="home-heroarea__text">
                            <h1 className="home-heroarea__h1">Experience the Difference</h1>
                            <p className="home-heroarea__p">
                                Copy Trade Options is the world’s leading trading and mining
                                platform that allows people to grow their portfolio and financial
                                experience
                            </p>
                        </div>
                        <div className="home-heroarea__button__div">
                            <button className="home-heroarea__button">Start Investing</button>
                        </div>
                    </div>
                </div>
            </div>

            <video src={toroLanding} autoPlay loop muted></video>
        </div>
    )
}

export default Header
