import React from "react"
import info1 from "../../../assets/home/info1.png"
import info2 from "../../../assets/home/info2.png"
import info3 from "../../../assets/home/info3.png"
import info4 from "../../../assets/home/info4.png"
import info5 from "../../../assets/home/info5.png"
import info6 from "../../../assets/home/info6.png"

import { motion } from "framer-motion"
import "./Info.css"

const Info = () => {
    return (
        <div className="info__container">
            <div className="info__cards">
                <motion.div className="info__card">
                    <div className="info__icon">
                        <img src={info1} alt="info1" />
                    </div>
                    <div className="info__text">
                        <h1 className="info__h1">Daily Mining Outputs</h1>
                        <p className="info__p">
                            Returns made from either trading or mining transactions will be added to
                            your account daily and automatically.
                        </p>
                    </div>
                </motion.div>

                <motion.div className="info__card">
                    <div className="info__icon">
                        <img src={info2} alt="info2" />
                    </div>
                    <div className="info__text">
                        <h1 className="info__h1">State of the Art Mining</h1>
                        <p className="icon__p">
                            Productivity is a top notch quality for any investment. So, for every
                            trade action or blockchain mining algorithm that we offer, we’re
                            providing some of the highest performing systems and softwares that
                            exist
                        </p>
                    </div>
                </motion.div>

                <motion.div className="info__card">
                    <div className="info__icon">
                        <img src={info3} alt="info3" />
                    </div>
                    <div className="info__text">
                        <h1 className="info__h1">Diverse Mining Portfolio</h1>
                        <p className="info__p">
                            Choose from a wide range of target assets for trading and over 10 major
                            mining algorithms that cut across 4 mineable cryptocurrencies
                        </p>
                    </div>
                </motion.div>

                <motion.div className="info__card">
                    <div className="info__info">
                        <img src={info4} alt="info4" />
                    </div>
                    <div className="info__text">
                        <h1 className="info__h1">Hardware is already running</h1>
                        <p className="info__p">
                            Don’t wrestle with rig assembly and hot, noisy miners at home. We have
                            the fastest bitcoin mining hardware running for you already
                        </p>
                    </div>
                </motion.div>

                <motion.div className="info__card">
                    <div className="info__icon">
                        <img src={info5} alt="info5" />
                    </div>
                    <div className="info__text">
                        <h1 className="info__h1">Intuitive Dashboard</h1>
                        <p className="info__p">
                            All the financial instruments data and charts that you need, when you
                            need them
                        </p>
                    </div>
                </motion.div>

                <motion.div className="info__card">
                    <div className="info__icon">
                        <img src={info6} alt="info6" />
                    </div>
                    <div className="info__text">
                        <h1 className="info__h1">Secure and Private</h1>
                        <p className="info__p">
                            We value the privacy of our users, so we strive to keep collected user
                            data to a minimum level.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Info
