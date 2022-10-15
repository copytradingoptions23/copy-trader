import React from "react"
import icon1 from "../../../assets/home/icon1.svg"
import icon2 from "../../../assets/home/icon2.svg"
import icon3 from "../../../assets/home/icon3.svg"
import icon4 from "../../../assets/home/icon4.svg"
import "./Brands.css"
import engPng from "../../../assets/home/engPng.png"
import { motion } from "framer-motion"
import { stringify } from "postcss"

const Brands = () => {
    return (
        <div className="brand__container">
            <motion.div className="brand__cards">
                <motion.div
                    className="brand__card"
                    initial={{ x: "-100vw", opacity: 0.2 }}
                    animate={{ x: 0.3, opacity: 1 }}
                    transition={{ type: "tween", delay: 0.8, duration: 1.0 }}
                >
                    <img src={icon1} className="brand__img" alt="" />
                </motion.div>
                <motion.div
                    className="brand__card"
                    initial={{ x: "-100vw", opacity: 0.2 }}
                    animate={{ x: 0.3, opacity: 1 }}
                    transition={{ type: "tween", delay: 0.6, duration: 1.2 }}
                >
                    <img src={icon2} className="brand__img" alt="" />
                </motion.div>

                <motion.div
                    className="brand__card"
                    initial={{ x: "-100vw", opacity: 0.2 }}
                    animate={{ x: 0.3, opacity: 1 }}
                    transition={{ type: "tween", delay: 0.4, duration: 1.4 }}
                >
                    <img src={icon3} className="brand__img" alt="" />
                </motion.div>

                <motion.div
                    className="brand__card"
                    initial={{ x: "-100vw", opacity: 0.2 }}
                    animate={{ x: 0.3, opacity: 1 }}
                    transition={{ type: "tween", delay: 0.2, duration: 1.6 }}
                >
                    <img src={icon4} className="brand__img" alt="" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Brands
