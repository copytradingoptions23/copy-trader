import React from "react"
import finmarket from "../../../assets/home/finmarket.mp4"
import poster from "../../../assets/home/icon2.svg"
import "./Fmarket.css"
import { motion } from "framer-motion"

const Fmarket = () => {
    return (
        <div className="fmarket__container">
            <div className="fmarket__text">
                <h1 className="fmarket__h1">Financial Markets Explained</h1>
            </div>
            <div className="fmarket__content">
                <motion.div
                    initial={{ y: +600, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 1.6 }}
                    className="fmarket__video__div"
                >
                    <video controls>
                        <source src={finmarket} type="video/mp4"></source>
                    </video>
                </motion.div>
                <motion.div
                    initial={{ y: +600, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 1.6 }}
                    className="fmarket__content__text"
                >
                    <p>
                        The financial markets collectively refers to an online market in which firms
                        and individuals enter into contracts to sell or buy a specific product from
                        a wide range of “financial market instruments”.
                    </p>
                    <br />
                    <p>
                        The sole purpose of investments within the financial market space is to
                        trade financial securities and derivatives at low transaction costs whilst
                        generating returns from calculated trade entries and exits.
                    </p>
                    <br />
                    <p>
                        Financial market instruments and securities include stocks and bonds,
                        options, cryptocurrencies, foreign currency pairs, raw materials and
                        precious metals which are known in the financial markets as commodities.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Fmarket
