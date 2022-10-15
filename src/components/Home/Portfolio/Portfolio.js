import React from "react"
import toroportfolio from "../../../assets/home/toro-portfolios.mp4"
import "./Portfolio.css"
import { motion } from "framer-motion"

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <div className="portfolio__info">
                <div className="portfolio__text">
                    <motion.h1
                        initial={{ y: +30, opacity: 0.2 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 1.1 }}
                        className="portfolio__h1"
                    >
                        Smart Portfolios
                    </motion.h1>
                    <p className="portfolio__p">
                        Invest in the future you believe in with{" "}
                        <span>thematic investment strategies</span>, offering{" "}
                        <span>diversified exposure</span> to the market segments that will shape our
                        lives.
                    </p>
                </div>
                <motion.div
                    initial={{ y: +16, opacity: 0.2 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 1.1 }}
                    className="portfolio__button__div"
                >
                    <button className="portfolio__button">Explore Portfolios</button>
                </motion.div>
            </div>
            <div className="portfolio__video__div">
                <video src={toroportfolio} autoPlay muted></video>
            </div>
        </div>
    )
}

export default Portfolio
