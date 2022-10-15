import React from "react"
import Header from "../components/Home/Header/Header"
import Brands from "../components/Home/Brands/Brands"
import "./styles/Home.css"
import NewBrand from "../components/Home/NewBrand/NewBrand"
import Fmarket from "../components/Home/Fmarket/Fmarket"
import Investors from "../components/Home/Investors/Investors"
import Crypto from "../components/Home/Crypto/Crypto"
import Info from '../components/Home/Info/Info'
import Portfolio from '../components/Home/Portfolio/Portfolio'
import Trust from '../components/Home/Trust/Trust'

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <Brands />
            <NewBrand />
            <Fmarket />
            <Investors />
            <Crypto />
            <Info />
            <Trust />
            <Portfolio />
        </div>
    )
}

export default Home
