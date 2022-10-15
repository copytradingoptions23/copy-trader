import React from "react"
import toroinvestors from "../../../assets/home/toro-investors.mp4"
import "./Investors.css"
import { motion } from "framer-motion"

const Investors = () => {
    return (
        <div className="investors__container">
            <div className="investors__video__div">
                <video src={toroinvestors} autoPlay loop muted></video>
            </div>
            <div className="investors__info">
                <div className="investors__text">
                    <motion.h1
                        initial={{ y: +30, opacity: 0.2 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 1.1 }}
                        className="investors__h1"
                    >
                        Copy top investors
                    </motion.h1>
                    <p className="investors__p">
                        With Pro Trade Options innovative CopyTrader™, you can automatically copy
                        the moves of other investors. Find investors you believe in and replicate
                        their actions in real time.
                    </p>
                </div>
                <motion.div
                    initial={{ y: +16, opacity: 0.2 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 1.1 }}
                    className="investors__button__div"
                >
                    <button className="investors__button">Start Copying</button>
                </motion.div>
            </div>
        </div>
    )
}

export default Investors
