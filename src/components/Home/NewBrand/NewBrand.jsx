import React from "react"
import icon5 from "../../../assets/home/icon5.svg"
import icon6 from "../../../assets/home/icon6.svg"
import icon7 from "../../../assets/home/icon7.svg"
import icon8 from "../../../assets/home/icon8.svg"
import { motion } from "framer-motion"
import "./NewBrand.css"

const NewBrand = () => {
    return (
        <div>
            <div className="newbrand__container">
                <div className="newbrand__text">
                    <h1 className="newbrand__h1">Stocks, Crypto and Beyond</h1>
                    <p className="newbrand__p">
                        Discover hundreds of assets across multiple categories
                    </p>
                </div>
                <motion.div className="brand__cards">
                    <motion.div
                        className="brand__card"
                        initial={{ x: "-100vw", opacity: 0.2 }}
                        animate={{ x: 0.3, opacity: 1 }}
                        transition={{ type: "tween", delay: 0.8, duration: 1.0 }}
                    >
                        <img src={icon5} className="brand__img" alt="" />
                    </motion.div>
                    <motion.div
                        className="brand__card"
                        initial={{ x: "-100vw", opacity: 0.2 }}
                        animate={{ x: 0.3, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.6, duration: 1.2 }}
                    >
                        <img src={icon6} className="brand__img" alt="" />
                    </motion.div>

                    <motion.div
                        className="brand__card"
                        initial={{ x: "-100vw", opacity: 0.2 }}
                        animate={{ x: 0.3, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.4, duration: 1.4 }}
                    >
                        <img src={icon7} className="brand__img" alt="" />
                    </motion.div>

                    <motion.div
                        className="brand__card"
                        initial={{ x: "-100vw", opacity: 0.2 }}
                        animate={{ x: 0.3, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.2, duration: 1.6 }}
                    >
                        <img src={icon8} className="brand__img" alt="" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default NewBrand
