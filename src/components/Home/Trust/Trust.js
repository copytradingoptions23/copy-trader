import React from "react"
import trust1 from "../../../assets/home/trust1.svg"
import trust2 from "../../../assets/home/trust2.svg"
import trust3 from "../../../assets/home/trust3.svg"
import trust4 from "../../../assets/home/trust4.svg"
import { motion } from "framer-motion"
import "./Trust.css"

const Trust = () => {
    return (
        <div className="trust__con">
            <div className="trust__container">
                <div className="trust__text">
                    <motion.h1
                        initial={{ y: +40, opacity: 0.2 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 1.1 }}
                        className="trust__h1"
                    >
                        Trusted worldwide
                    </motion.h1>

                    <motion.p
                        initial={{ y: +50, opacity: 0.2 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 1.1 }}
                        className="trust__p"
                    >
                        Discover why millions of investors from over 100 countries joined Pro Trade
                        Options
                    </motion.p>
                </div>
                <motion.div
                    initial={{ y: +100, opacity: 0.2 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 1.6 }}
                    className="trust__cards"
                >
                    <div className="trust__card">
                        <img src={trust1} alt="" className="trust__icon" />
                        <div className="trust__info">
                            <h1 className="trust__name">Social</h1>
                            <p className="trust__num">More than 25 million users globally</p>
                        </div>
                    </div>

                    <div className="trust__card">
                        <img src={trust2} alt="" className="trust__icon" />
                        <div className="trust__info">
                            <h1 className="trust__name">Reliable</h1>
                            <p className="trust__num">Regulated by bodies around the world</p>
                        </div>
                    </div>

                    <div className="trust__card">
                        <img src={trust3} alt="" className="trust__icon" />
                        <div className="trust__info">
                            <h1 className="trust__name">Secured</h1>
                            <p className="trust__num">Utilising top-tier security practices</p>
                        </div>
                    </div>

                    <div className="trust__card">
                        <img src={trust4} alt="" className="trust__icon" />
                        <div className="trust__info">
                            <h1 className="trust__name">Global</h1>
                            <p className="trust__num">Providing services around the world</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Trust
