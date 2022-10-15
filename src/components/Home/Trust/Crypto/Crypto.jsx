import React from "react"
import "./Crypto.css"
import cosmos from "../../../assets/home/cosmos.svg"
import bitcoin from "../../../assets/home/bitcoin.svg"
import ethereum from "../../../assets/home/ethereum.svg"
import binance from "../../../assets/home/binance.svg"
import { motion } from "framer-motion"

const Crypto = () => {
    return (
        <div className="crypto__container">
            <div className="crypto__text">
                <motion.h1
                    initial={{ y: +40, opacity: 0.2 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 1.1 }}
                    className="crypto__h1"
                >
                    MINE TOP CRYPTO CURRENCIES
                </motion.h1>
                <motion.p
                    initial={{ y: +50, opacity: 0.2 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 1.1 }}
                    className="crypto__p"
                >
                    Unlike paper money, Bitcoin and other cryptocurrencies are produced
                    mathematically and held digitally. The people who voluntarily offer their
                    computing power to secure these cryptocurrency networks are called miners.
                    Cryptocurrencies don’t have a central government or other so-called ‘middlemen’
                    that decide about the future of the system.
                </motion.p>
                <br />
                <motion.p
                    initial={{ y: +50, opacity: 0.2 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 1.1 }}
                    className="crypto__p"
                >
                    As miners, we are processing and verifying the transactions of the
                    cryptocurrency ecosystems and keeping their public transaction history
                    (blockchains) maintained and secure. For this, the mining community is rewarded
                    with the networks’ transaction fees and newly created coins.
                </motion.p>
            </div>
            <motion.div
                initial={{ y: +100, opacity: 0.2 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1.6 }}
                className="crypto__cards"
            >
                <div className="crypto__card">
                    <div className="crypto__info">
                        <img src={cosmos} alt="" className="crypto__icon" />
                        <p className="crypto__name">Cosmos</p>
                    </div>
                    <p className="crypto__num">13.08609</p>
                </div>

                <div className="crypto__card">
                    <div className="crypto__info">
                        <img src={bitcoin} alt="" className="crypto__icon" />
                        <p className="crypto__name">Bitcoin</p>
                    </div>
                    <p className="crypto__num">19824.04</p>
                </div>

                <div className="crypto__card">
                    <div className="crypto__info">
                        <img src={ethereum} alt="" className="crypto__icon" />
                        <p className="crypto__name">Ethereum</p>
                    </div>
                    <p className="crypto__num">1353.23</p>
                </div>

                <div className="crypto__card">
                    <div className="crypto__info">
                        <img src={binance} alt="" className="crypto__icon" />
                        <p className="crypto__name">Binance Coin</p>
                    </div>
                    <p className="crypto__num">287.16007</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Crypto
